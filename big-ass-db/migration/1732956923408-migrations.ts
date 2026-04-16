import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732956923408 implements MigrationInterface {
    name = 'Migrations1732956923408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "report_transaction_tax_order_id_index" ON "report_transaction_tax" ("order_id") `);
        await queryRunner.query(`CREATE INDEX "report_transaction_tax_date_account_id_location_id_terminal_id" ON "report_transaction_tax" ("date", "account_id", "location_id", "terminal_id") `);
        await queryRunner.query(`CREATE INDEX "report_transaction_tax_account_id_date_index" ON "report_transaction_tax" ("account_id", "date") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."report_transaction_tax_account_id_date_index"`);
        await queryRunner.query(`DROP INDEX "public"."report_transaction_tax_date_account_id_location_id_terminal_id"`);
        await queryRunner.query(`DROP INDEX "public"."report_transaction_tax_order_id_index"`);
    }

}
