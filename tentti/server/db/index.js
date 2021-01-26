const { Pool } = require('pg')
const { connect } = require('..')
// const pool = new Pool()

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'tenttikanta',
//     password: 'vaahter1',
//     port: 5432,
//   })

var connectInfo = {}

if (process.env.HEROKU) {
  connectInfo = {
    user: 'mkengyrmxwpint',
    host: 'ec2-54-75-225-52.eu-west-1.compute.amazonaws.com',
    database: 'damigs5cr53q87',
    password: '695950b31c245b6214706acf871624fd73e34e47f7bd66ecfdad30ad9f3bf9e3',
    port: 5432
  }
} else {
  connectInfo = {
    user: 'postgres',
    host: 'localhost',
    database: 'tenttikanta',
    password: 'vaahter1',
    port: 5432
  }
}

const pool = new Pool(connectInfo)

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}