import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateDataToPartitionedTable20231732956923418
  implements MigrationInterface
{
  name = "MigrateDataToPartitionedTable20231732956923418";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO report_transaction_tax_2023_11
      SELECT * FROM report_transaction_tax
      WHERE date >= '2023-11-01' AND date < '2023-12-01';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM report_transaction_tax_2023_11
      WHERE date >= '2023-11-01' AND date < '2023-12-01';
    `);
  }
}
