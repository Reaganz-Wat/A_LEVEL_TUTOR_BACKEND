import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const isDevelopment = 'development' === 'development';  // Hardcoded to true for development environment

const dataSource = new DataSource({
  type: 'postgres',  // Hardcoded to postgres
  username: 'postgres',  // Hardcoded to postgres user
  password: 'admin123',  // Hardcoded password
  host: 'localhost',  // Hardcoded to localhost
  port: 5432,  // Hardcoded to 5432
  database: 'aitutor',  // Hardcoded database name
  entities: ['dist/src/**/entities/**/*.entity{.ts,.js}'],  // Hardcoded path for entities
  migrations: ['dist/db/migrations/*{.ts,.js}'],  // Hardcoded path for migrations
  synchronize: isDevelopment,  // Will synchronize if in development
  migrationsTableName: 'migrations',  // Migration table name
  ssl: false,  // SSL is false for local dev environment
});

export async function initializeDataSource() {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  return dataSource;
}

export default dataSource;
