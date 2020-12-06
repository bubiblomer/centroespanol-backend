module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", process.env.PROD_DATABASE_HOST),
        port: env.int("DATABASE_PORT", process.env.PROD_DATABASE_PORT),
        database: env("DATABASE_NAME", process.env.PROD_DATABASE_NAME),
        username: env("DATABASE_USERNAME", process.env.PROD_DATABASE_USERNAME),
        password: env("DATABASE_PASSWORD", process.env.PROD_DATABASE_PASSWORD),
        schema: "public",
      },
      options: {},
    },
  },
});
