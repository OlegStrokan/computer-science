import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732911345553 implements MigrationInterface {
    name = 'Migrations1732911345553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "report_transaction_tax" ("id" character varying(36) NOT NULL, "tax_id" character varying(36) NOT NULL, "name" character varying(200) NOT NULL, "transaction_id" character varying(36) NOT NULL, "transaction_number" character varying(40) NOT NULL, "transaction_state" character varying(40) NOT NULL, "payment_type" character varying(40) NOT NULL, "transaction_type" character varying(40) NOT NULL, "external_payment_type" character varying(40) NOT NULL, "card_processing_deferred" boolean NOT NULL, "order_id" character varying(36) NOT NULL, "order_number" character varying(40) NOT NULL, "order_state" character varying(40) NOT NULL, "order_fulfillment_type" character varying(100) NOT NULL, "source_type" character varying(40) NOT NULL, "source_name" character varying(40) NOT NULL, "account_id" character varying(36) NOT NULL, "account_name" character varying(100) NOT NULL, "location_id" character varying(36) NOT NULL, "location_name" character varying(100) NOT NULL, "terminal_id" character varying(36) NOT NULL, "terminal_name" character varying(100) NOT NULL, "assignee_id" character varying(36) NOT NULL, "assignee_name" character varying(100) NOT NULL, "customer_id" character varying(36) NOT NULL, "customer_name" character varying(100) NOT NULL, "assignment_id" character varying(36) NOT NULL, "assignment_name" character varying(100) NOT NULL, "date" date NOT NULL, "datetime" character varying(255) NOT NULL, "hour" character varying(2) NOT NULL, "year" character varying(4) NOT NULL, "month" character varying(2) NOT NULL, "day" character varying(2) NOT NULL, "week" character varying(2) NOT NULL, "weekday" character varying(3) NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "ref_payment_date" date NOT NULL, "amount_total" bigint NOT NULL, "amount_absolute" bigint NOT NULL, "amount_percentage" bigint NOT NULL, "amount_net_collected" bigint NOT NULL, "accounting_type" character varying(6) NOT NULL, "last_recalculate_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_450c8cd52ee0a1c47a25535952f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "report_transaction_tax"`);
    }

}
