export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("PRODUCTION_DATABASE_HOST"),
      port: env.int("PRODUCTION_DATABASE_PORT"),
      database: env("PRODUCTION_DATABASE_NAME"),
      user: env("PRODUCTION_DATABASE_USERNAME"),
      password: env("PRODUCTION_DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL"),
    },
  },
});
