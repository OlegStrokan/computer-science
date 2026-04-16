import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableJan20241683295692343
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableJan20241683295692343";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_01
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-01-01' AND date < '2024-02-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_01
      WHERE date >= '2024-01-01' AND date < '2024-02-01';
    `);
  }
}
