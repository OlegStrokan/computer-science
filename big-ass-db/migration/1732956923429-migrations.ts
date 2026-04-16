import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableMay20241683295692347
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableMay20241683295692347";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_05
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-05-01' AND date < '2024-06-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_05
      WHERE date >= '2024-05-01' AND date < '2024-06-01';
    `);
  }
}
