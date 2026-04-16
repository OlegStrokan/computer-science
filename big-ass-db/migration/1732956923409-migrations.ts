import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePartitionedTable1732956511400 implements MigrationInterface {
  name = "CreatePartitionedTable1732956511400";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE report_transaction_tax_partitioned (
                id varchar(36),
                tax_id varchar(36),
                name varchar(200),
                transaction_id varchar(36),
                transaction_number varchar(40),
                transaction_state varchar(40),
                payment_type varchar(40),
                transaction_type varchar(40),
                external_payment_type varchar(40),
                card_processing_deferred boolean,
                order_id varchar(36),
                order_number varchar(40),
                order_state varchar(40),
                order_fulfillment_type varchar(100),
                source_type varchar(40),
                source_name varchar(40),
                account_id varchar(36),
                account_name varchar(100),
                location_id varchar(36),
                location_name varchar(100),
                terminal_id varchar(36),
                terminal_name varchar(100),
                assignee_id varchar(36),
                assignee_name varchar(100),
                customer_id varchar(36),
                customer_name varchar(100),
                assignment_id varchar(36),
                assignment_name varchar(100),
                date date,
                datetime varchar(255),
                hour varchar(2),
                year varchar(4),
                month varchar(2),
                day varchar(2),
                week varchar(2),
                weekday varchar(3),
                timestamp timestamp with time zone,
                ref_payment_date date,
                amount_total bigint,
                amount_absolute bigint,
                amount_percentage bigint,
                amount_net_collected bigint,
                accounting_type varchar(6),
                last_recalculate_timestamp timestamp with time zone
            ) PARTITION BY RANGE (date);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE report_transaction_tax_partitioned`);
  }
}
