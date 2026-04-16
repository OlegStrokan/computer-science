import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "stroka01",
  password: "admin",
  database: "big_ass_db",
  synchronize: false,
  logging: false,
  entities: ["entity/**/*.ts"],
  migrations: ["migration/**/*.ts"],
  subscribers: ["subscriber/**/*.ts"],
});
