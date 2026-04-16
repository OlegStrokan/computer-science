import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableJun20241683295692348
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableJun20241683295692348";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_06
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-06-01' AND date < '2024-07-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_06
      WHERE date >= '2024-06-01' AND date < '2024-07-01';
    `);
  }
}
