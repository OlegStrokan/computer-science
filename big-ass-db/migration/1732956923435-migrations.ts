import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableOct20241683295692352
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableOct20241683295692352";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_10
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-10-01' AND date < '2024-11-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_10
      WHERE date >= '2024-10-01' AND date < '2024-11-01';
    `);
  }
}
