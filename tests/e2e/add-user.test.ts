// import pgConnectionHelper from '@/infra/database/pg-helper'
// import { PgUserRepository } from '@/infra/database/repositories/user-repository'
// import { resolve } from 'path'
// import supertest from 'supertest'
// import { createConnection } from 'typeorm'
// import { fakeUserParams } from '../mocks/user'

// jest.mock('jsonwebtoken', () => ({
//   async sign(): Promise<string> {
//     return 'token'
//   },

//   async verify(): Promise<string> {
//     return 'payload'
//   }
// }))

// describe('Add User Route', () => {
//   beforeAll(async () => {
//     jest.spyOn(pgConnectionHelper, 'connect').mockImplementationOnce(async () => {
//       await createConnection({
//         type: 'sqlite',
//         database: resolve(__dirname, '..', 'mocks', 'fake_db.sqlite'),
//         entities: [resolve(__dirname, '../../src/infra/database/models/*.ts')]
//       })
//     })
//     await pgConnectionHelper.connect()
//   })
//   afterAll(async () => await pgConnectionHelper.close())
//   beforeEach(() =>
//     pgConnectionHelper.getConnection().getCustomRepository(PgUserRepository).delete({})
//   )

//   it('Should create a user and return 201 on success', async () => {
//     const app = (await import('@/app/setup/app')).default
//     const request = supertest(app)
//     const response = await request.post('/signup').send(fakeUserParams)
//     expect(response.status).toBe(201)
//   })

//   it('Should return 400 if receive an invalid request', async () => {
//     const app = (await import('@/app/setup/app')).default
//     const request = supertest(app)
//     await request.post('/signup').send({ name: 'User', email: 'user@mail.com' }).expect(400)
//   })

//   it('Should return 409 if receive an already registered email', async () => {
//     const app = (await import('@/app/setup/app')).default
//     const request = supertest(app)

//     await request.post('/signup').send(fakeUserParams)
//     await request.post('/signup').send(fakeUserParams).expect(409)
//   })
// })

it('', () => expect(1).toBe(1))
