import { Sequelize } from "sequelize";
import Artist from "../models/artistsModel";
import dotenv from "dotenv";
dotenv.config();

// URL fornecida pelo Neon
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_SnUqBr7DK2xj@ep-odd-unit-acxdd8oc-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: console.log, // mostra queries no terminal
});

export const dbConnected = (async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com Neon bem-sucedida!");
  } catch (error) {
    console.error("❌ Não foi possível conectar:", error);
  }
})();

export const tableCreated = (async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado ao Neon!");

    await Artist.sync({ alter: true }); // cria ou atualiza tabela
    console.log("✅ Tabela Artist criada ou atualizada!");
  } catch (err) {
    console.error("❌ Erro ao conectar/criar tabela:", err);
  }
})();

export default sequelize;