import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@gripen.dev',
        password: '123456789',
        role: 'admin',
      },
      {
        email: 'normal@gripen.dev',
        password: '123456789',
        role: 'normal',
      },
    ])
  }
}
