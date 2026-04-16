import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTableApr20241683295692346
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTableApr20241683295692346";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2024_04
      SELECT * FROM report_transaction_tax
      WHERE date >= '2024-04-01' AND date < '2024-05-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2024_04
      WHERE date >= '2024-04-01' AND date < '2024-05-01';
    `);
  }
}
