import { Entity, PrimaryColumn, Column, Index } from "typeorm";

@Entity()
@Index("idx_report_transaction_tax_filter", [
  "account_id",
  "date",
  "location_id",
  "transaction_state",
])
@Index("idx_report_transaction_tax_group", [
  "name",
  "order_state",
  "payment_type",
])
@Index("report_transaction_tax_account_id_date_index", ["account_id", "date"])
@Index("report_transaction_tax_date_account_id_location_id_terminal_id", [
  "date",
  "account_id",
  "location_id",
  "terminal_id",
])
@Index("report_transaction_tax_order_id_index", ["order_id"])
export class ReportTransactionTax {
  @PrimaryColumn("varchar", { length: 36 })
  id: string;

  @Column("varchar", { length: 36 })
  tax_id: string;

  @Column("varchar", { length: 200 })
  name: string;

  @Column("varchar", { length: 36 })
  transaction_id: string;

  @Column("varchar", { length: 40 })
  transaction_number: string;

  @Column("varchar", { length: 40 })
  transaction_state: string;

  @Column("varchar", { length: 40 })
  payment_type: string;

  @Column("varchar", { length: 40 })
  transaction_type: string;

  @Column("varchar", { length: 40 })
  external_payment_type: string;

  @Column("boolean")
  card_processing_deferred: boolean;

  @Column("varchar", { length: 36 })
  order_id: string;

  @Column("varchar", { length: 40 })
  order_number: string;

  @Column("varchar", { length: 40 })
  order_state: string;

  @Column("varchar", { length: 100 })
  order_fulfillment_type: string;

  @Column("varchar", { length: 40 })
  source_type: string;

  @Column("varchar", { length: 40 })
  source_name: string;

  @Column("varchar", { length: 36 })
  account_id: string;

  @Column("varchar", { length: 100 })
  account_name: string;

  @Column("varchar", { length: 36 })
  location_id: string;

  @Column("varchar", { length: 100 })
  location_name: string;

  @Column("varchar", { length: 36 })
  terminal_id: string;

  @Column("varchar", { length: 100 })
  terminal_name: string;

  @Column("varchar", { length: 36 })
  assignee_id: string;

  @Column("varchar", { length: 100 })
  assignee_name: string;

  @Column("varchar", { length: 36 })
  customer_id: string;

  @Column("varchar", { length: 100 })
  customer_name: string;

  @Column("varchar", { length: 36 })
  assignment_id: string;

  @Column("varchar", { length: 100 })
  assignment_name: string;

  @Column("date")
  date: Date;

  @Column("varchar", { length: 255 })
  datetime: string;

  @Column("varchar", { length: 2 })
  hour: string;

  @Column("varchar", { length: 4 })
  year: string;

  @Column("varchar", { length: 2 })
  month: string;

  @Column("varchar", { length: 2 })
  day: string;

  @Column("varchar", { length: 2 })
  week: string;

  @Column("varchar", { length: 3 })
  weekday: string;

  @Column("timestamp with time zone")
  timestamp: Date;

  @Column("date")
  ref_payment_date: Date;

  @Column("bigint")
  amount_total: number;

  @Column("bigint")
  amount_absolute: number;

  @Column("bigint")
  amount_percentage: number;

  @Column("bigint")
  amount_net_collected: number;

  @Column("varchar", { length: 6 })
  accounting_type: string;

  @Column("timestamp with time zone")
  last_recalculate_timestamp: Date;
}
