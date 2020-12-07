module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: { enabled: true },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "915961ac78f3208e931a380f409ebd3d"),
    },
  },
});
