// Update with your config settings.
require('dotenv').config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
