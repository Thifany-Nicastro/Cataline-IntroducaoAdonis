import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Foo',
        email: 'admin@gripen.dev',
        password: '123456789',
        role: 'admin',
      },
      {
        name: 'Bar',
        email: 'normal@gripen.dev',
        password: '123456789',
        role: 'normal',
      },
    ])
  }
}
