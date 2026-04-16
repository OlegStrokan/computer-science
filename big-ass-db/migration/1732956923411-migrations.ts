import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateIndexesOnMonthlyPartitions1732956511402
  implements MigrationInterface
{
  name = "CreateIndexesOnMonthlyPartitions1732956511402";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const partitions = [
      "report_transaction_tax_2023_11",
      "report_transaction_tax_2023_12",
      "report_transaction_tax_2024_01",
      "report_transaction_tax_2024_02",
      "report_transaction_tax_2024_03",
      "report_transaction_tax_2024_04",
      "report_transaction_tax_2024_05",
      "report_transaction_tax_2024_06",
      "report_transaction_tax_2024_07",
      "report_transaction_tax_2024_08",
      "report_transaction_tax_2024_09",
      "report_transaction_tax_2024_10",
      "report_transaction_tax_2024_11",
    ];

    for (const partition of partitions) {
      await queryRunner.query(`
        CREATE INDEX idx_${partition}_group ON ${partition} ("name", "order_state", "payment_type");
        CREATE INDEX idx_${partition}_filter ON ${partition} ("account_id", "date", "location_id", "transaction_state");
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const partitions = [
      "report_transaction_tax_2023_11",
      "report_transaction_tax_2023_12",
      "report_transaction_tax_2024_01",
      "report_transaction_tax_2024_02",
      "report_transaction_tax_2024_03",
      "report_transaction_tax_2024_04",
      "report_transaction_tax_2024_05",
      "report_transaction_tax_2024_06",
      "report_transaction_tax_2024_07",
      "report_transaction_tax_2024_08",
      "report_transaction_tax_2024_09",
      "report_transaction_tax_2024_10",
      "report_transaction_tax_2024_11",
    ];

    for (const partition of partitions) {
      await queryRunner.query(`
        DROP INDEX idx_${partition}_group;
        DROP INDEX idx_${partition}_filter;
      `);
    }
  }
}
