import { Message } from '../models/index.js'
import { broadcast } from '../services/io.js'

class MessageController {

  async index(req, res) {
    try {
      const messages = await Message.getAll()
      res.json(messages)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      const message = await Message.getById(id)
      res.json(message)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async create(req, res) {
    try {
      const id = await Message.save({
        author: req.session.username,
        text: req.body.text
      })

      const message = await Message.getById(id)

      broadcast('message:create', message)

      res.json({ id })
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { body } = req
      await Message.update(id, body)
      res.sendStatus(201)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      await Message.delete(id)
      res.sendStatus(200)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }
}

export default new MessageController()