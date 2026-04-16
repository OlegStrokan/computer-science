import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMonthlyPartitions1732956511401
  implements MigrationInterface
{
  name = "CreateMonthlyPartitions1732956511401";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE report_transaction_tax_2023_11 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2023-11-01') TO ('2023-12-01');

      CREATE TABLE report_transaction_tax_2023_12 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2023-12-01') TO ('2024-01-01');

      CREATE TABLE report_transaction_tax_2024_01 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

      CREATE TABLE report_transaction_tax_2024_02 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

      CREATE TABLE report_transaction_tax_2024_03 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-03-01') TO ('2024-04-01');

      CREATE TABLE report_transaction_tax_2024_04 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-04-01') TO ('2024-05-01');

      CREATE TABLE report_transaction_tax_2024_05 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-05-01') TO ('2024-06-01');

      CREATE TABLE report_transaction_tax_2024_06 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-06-01') TO ('2024-07-01');

      CREATE TABLE report_transaction_tax_2024_07 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-07-01') TO ('2024-08-01');

      CREATE TABLE report_transaction_tax_2024_08 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-08-01') TO ('2024-09-01');

      CREATE TABLE report_transaction_tax_2024_09 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-09-01') TO ('2024-10-01');

      CREATE TABLE report_transaction_tax_2024_10 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-10-01') TO ('2024-11-01');

      CREATE TABLE report_transaction_tax_2024_11 PARTITION OF report_transaction_tax_partitioned
      FOR VALUES FROM ('2024-11-01') TO ('2024-12-01');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE report_transaction_tax_2023_11;
      DROP TABLE report_transaction_tax_2023_12;
      DROP TABLE report_transaction_tax_2024_01;
      DROP TABLE report_transaction_tax_2024_02;
      DROP TABLE report_transaction_tax_2024_03;
      DROP TABLE report_transaction_tax_2024_04;
      DROP TABLE report_transaction_tax_2024_05;
      DROP TABLE report_transaction_tax_2024_06;
      DROP TABLE report_transaction_tax_2024_07;
      DROP TABLE report_transaction_tax_2024_08;
      DROP TABLE report_transaction_tax_2024_09;
      DROP TABLE report_transaction_tax_2024_10;
      DROP TABLE report_transaction_tax_2024_11;
    `);
  }
}
