import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [
      rules.unique({
        table: 'posts',
        column: 'title',
        whereNot: this.ctx.params.id ? { id: this.ctx.params.id } : undefined,
      }),
    ]),
    content: schema.string({ trim: true }),
  })

  public messages = {}
}
