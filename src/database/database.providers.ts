import { DataSource } from "typeorm";
export const databaseProviders = [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'mssql',
          host: '192.168.0.115',
          port: 1433,
          username: 'pmt',
          password: 'pmt@123',
          database: 'PMT_Only_test',
          entities: ["src/photo/photo.entity.ts"],
          synchronize: true,
        });
  
        return dataSource.initialize();
      },
    },
  ];