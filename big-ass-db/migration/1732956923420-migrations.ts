import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableDec20231683295692342
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableDec20231683295692342";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2023_12
      SELECT * FROM report_transaction_tax
      WHERE date >= '2023-12-01' AND date < '2024-01-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2023_12
      WHERE date >= '2023-12-01' AND date < '2024-01-01';
    `);
  }
}
