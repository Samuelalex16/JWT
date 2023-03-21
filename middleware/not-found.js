const { notFound } = require('../errors')
const NotFound = (req, res) => {
    throw new notFound("Route does not exists")
}
module.exports = NotFound