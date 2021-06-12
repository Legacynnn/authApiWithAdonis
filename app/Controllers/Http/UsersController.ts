import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
  public async index() {
    const user  = await User.all()

    return user
  }

  public async store({ request }: HttpContextContract) {
    const { email, password } = request.body()

    const user = new User()

    user.email = email
    user.password = password

    await user.save()

    return user
  }
}
