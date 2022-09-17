module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '0.0.0.0'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'estimationDatabase'),
      user: env('DATABASE_USERNAME', 'estimation'),
      password: env('DATABASE_PASSWORD', 'Estimation@123$'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
