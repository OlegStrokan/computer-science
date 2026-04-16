import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableJul20241683295692349
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableJul20241683295692349";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_07
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-07-01' AND date < '2024-08-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_07
      WHERE date >= '2024-07-01' AND date < '2024-08-01';
    `);
  }
}
