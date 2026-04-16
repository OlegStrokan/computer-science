import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableFeb20241683295692344
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableFeb20241683295692344";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_02
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-02-01' AND date < '2024-03-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_02
      WHERE date >= '2024-02-01' AND date < '2024-03-01';
    `);
  }
}
