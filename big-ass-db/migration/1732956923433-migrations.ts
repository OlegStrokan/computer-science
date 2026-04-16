import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableAug20241683295692350
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableAug20241683295692350";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_08
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-08-01' AND date < '2024-09-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_08
      WHERE date >= '2024-08-01' AND date < '2024-09-01';
    `);
  }
}
