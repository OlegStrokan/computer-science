import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableNov20241683295692353
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableNov20241683295692353";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_11
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-11-01' AND date < '2024-12-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_11
      WHERE date >= '2024-11-01' AND date < '2024-12-01';
    `);
  }
}
