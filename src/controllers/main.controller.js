class MainController {
  index(req, res) {
    const { user } = req
    res.render('index', { user })
  }
}

export default new MainController()