import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    jwtSecret: process.env.JWT_SECRET,
    db: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
    },
  };
});