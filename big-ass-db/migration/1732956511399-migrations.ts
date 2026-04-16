import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732956511399 implements MigrationInterface {
  name = "Migrations1732956511399";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "idx_report_transaction_tax_group" ON "report_transaction_tax" ("name", "order_state", "payment_type") `
    );
    await queryRunner.query(
      `CREATE INDEX "idx_report_transaction_tax_filter" ON "report_transaction_tax" ("account_id", "date", "location_id", "transaction_state") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."idx_report_transaction_tax_filter"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."idx_report_transaction_tax_group"`
    );
  }
}
