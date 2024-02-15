import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        username: 'root',
        password: '1234',
        host: 'localhost',
        port: 3306,
        database: 'inmobiliaria',
        entities: ['/.src/**/*.entity.ts'],
        /* entities: [User, Client, Session], */
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
