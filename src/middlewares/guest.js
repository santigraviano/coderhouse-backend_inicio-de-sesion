const guestMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  return next()
}

export default guestMiddleware