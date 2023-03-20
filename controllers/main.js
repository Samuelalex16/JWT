const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async(req, res) => {
    const { username, password } = req.body


    if (!username || !password) {
        throw new CustomAPIError('Please provide Username and password', 400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async(req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startWith('Bearer')) {
        throw new CustomAPIError('No Token', 400)
    }

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: "Hello Samuel Alexander", secret: `Lucky number:${luckyNumber}` })
}

module.exports = {
    login,
    dashboard
}