import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.all()

    return posts
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(PostValidator)

    const user = await auth.authenticate()

    const post = await Post.create({ authorId: user.id, ...data })

    await post.load('author')

    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    return post
  }

  public async update({ request, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(PostValidator)

    post.merge(data)

    await post.save()

    await post.load('author')

    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    await post.delete()
  }
}
