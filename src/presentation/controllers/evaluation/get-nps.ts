import { ListEvaluation } from '@/domain/evaluation/list-evaluation-by-service'
import { UnauthorizedMaintainerError } from '@/domain/service/errors/unauthorized-maintainer'
import { UnregisteredApiKeyError } from '@/domain/service/errors/unregistered-api-key'
import { badRequest, forbidden, noContent, ok, serverError } from '@/presentation/helpers/http'
import { Controller } from '@/core/presentation/controllers'
import { HttpResponse } from '@/presentation/ports/http'
import { Validator } from '@/presentation/ports/validator'
import { CalculateNPS } from '@/services/nps/calculate-nps'

export class GetNPSController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly listEvaluation: ListEvaluation,
    private readonly npsService: CalculateNPS
  ) {}

  public async handle(request: { service: string; userId: string }): Promise<HttpResponse> {
    try {
      const validationResult = this.validator.validate(request)
      if (validationResult instanceof Error) return badRequest(validationResult)

      const evaluations = await this.listEvaluation.list(request)
      if (evaluations instanceof UnregisteredApiKeyError) return badRequest(evaluations)
      else if (evaluations instanceof UnauthorizedMaintainerError) return forbidden(evaluations)
      else if (evaluations === null) return noContent()

      const nps = await this.npsService.calculate(evaluations)

      return ok(nps)
    } catch (error) {
      return serverError(error)
    }
  }
}
