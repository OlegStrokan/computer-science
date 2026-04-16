import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableMar20241683295692345
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableMar20241683295692345";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_03
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-03-01' AND date < '2024-04-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_03
      WHERE date >= '2024-03-01' AND date < '2024-04-01';
    `);
  }
}
