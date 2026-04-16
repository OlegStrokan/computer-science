import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableSep20241683295692351
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableSep20241683295692351";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_09
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-09-01' AND date < '2024-10-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_09
      WHERE date >= '2024-09-01' AND date < '2024-10-01';
    `);
  }
}
