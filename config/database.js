module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("TEST_DATABASE_HOST"),
        port: env.int("TEST_DATABASE_PORT"),
        database: env("TEST_DATABASE_NAME"),
        username: env("TEST_DATABASE_USERNAME"),
        password: env("TEST_DATABASE_PASSWORD"),
        schema: "public",
      },
      options: {},
    },
  },
});
// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "sqlite",
//         filename: env("DATABASE_FILENAME", ".tmp/data.db"),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
