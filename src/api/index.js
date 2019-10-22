import request from 'superagent'
const mock = require('superagent-mocker')(request)
const sprintf = require('sprintf-js').sprintf
const host = 'http://localhost:8080'

mock.timeout = () => {
    return Math.floor(1000 + (Math.random() * (2000 - 1000 + 1)))
}

const uri = (path, ...args) => {
    return sprintf(path, ...args)
}

export { request, uri, mock, host }