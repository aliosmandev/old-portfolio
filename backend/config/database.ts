export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DEVELOPMENT_DATABASE_HOST'),
      port: env.int('DEVELOPMENT_DATABASE_PORT'),
      database: env('DEVELOPMENT_DATABASE_NAME'),
      user: env('DEVELOPMENT_DATABASE_USERNAME'),
      password: env('DEVELOPMENT_DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL'),
    },
  }
});
