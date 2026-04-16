import "reflect-metadata";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "./data-source";
import { ReportTransactionTax } from "./entity/model";
import { faker } from "@faker-js/faker";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");

    console.time("Database Insertion Time");

    const chunkSize = 1000;
    const totalRecords = 7000000;
    const transactions: ReportTransactionTax[] = [];

    for (let i = 0; i < totalRecords; i++) {
      const transaction = new ReportTransactionTax();
      transaction.id = uuidv4();
      transaction.tax_id = uuidv4();
      transaction.name = faker.commerce.productName().slice(0, 40);
      transaction.transaction_id = uuidv4();
      transaction.transaction_number = `T${faker.number.int({
        min: 10,
        max: 99,
      })}-${faker.number.int({ min: 1000, max: 9999 })}`;
      transaction.transaction_state = faker.helpers
        .arrayElement(["Processed", "Pending", "Failed"])
        .slice(0, 40);
      transaction.payment_type = faker.helpers
        .arrayElement(["Cash", "Card", "Credit"])
        .slice(0, 40);
      transaction.transaction_type = faker.helpers
        .arrayElement(["Payment", "Refund"])
        .slice(0, 40);
      transaction.external_payment_type = faker.helpers
        .arrayElement(["PayPal", "Stripe", "Square"])
        .slice(0, 40);
      transaction.card_processing_deferred = faker.datatype.boolean();
      transaction.order_id = uuidv4();
      transaction.order_number = `R${faker.number.int({
        min: 10,
        max: 99,
      })}-${faker.number.int({ min: 1000, max: 9999 })}`;
      transaction.order_state = faker.helpers
        .arrayElement(["Closed", "Open", "Cancelled"])
        .slice(0, 40);
      transaction.order_fulfillment_type = faker.helpers
        .arrayElement(["For Here", "Pick Up", "Delivery"])
        .slice(0, 40);
      transaction.source_type = faker.helpers
        .arrayElement(["POS", "Online", "Mobile"])
        .slice(0, 40);
      transaction.source_name = faker.company.name().slice(0, 40);
      transaction.account_id = uuidv4();
      transaction.account_name = faker.company.name().slice(0, 40);
      transaction.location_id = uuidv4();
      transaction.location_name = faker.location.city().slice(0, 40);
      transaction.terminal_id = uuidv4();
      transaction.terminal_name = faker.commerce.department().slice(0, 40);
      transaction.assignee_id = uuidv4();
      transaction.assignee_name = faker.person.fullName().slice(0, 40);
      transaction.customer_id = uuidv4();
      transaction.customer_name = faker.person.fullName().slice(0, 40);
      transaction.assignment_id = uuidv4();
      transaction.assignment_name = faker.commerce.productName().slice(0, 40);
      transaction.date = faker.date.past();
      transaction.datetime = transaction.date.toISOString();
      transaction.hour = transaction.date
        .getHours()
        .toString()
        .padStart(2, "0");
      transaction.year = transaction.date.getFullYear().toString();
      transaction.month = (transaction.date.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      transaction.day = transaction.date.getDate().toString().padStart(2, "0");
      transaction.week = faker.number
        .int({ min: 1, max: 52 })
        .toString()
        .padStart(2, "0");
      transaction.weekday = faker.date.weekday().slice(0, 3); // Limit to 3 characters
      transaction.timestamp = new Date();
      transaction.ref_payment_date = faker.date.past();
      transaction.amount_total = faker.number.int({ min: 100, max: 10000 });
      transaction.amount_absolute = transaction.amount_total;
      transaction.amount_percentage = faker.number.int({ min: 1, max: 100 });
      transaction.amount_net_collected =
        transaction.amount_total -
        faker.number.int({ min: 0, max: transaction.amount_total });
      transaction.accounting_type = faker.helpers
        .arrayElement(["Cash", "Credit", "Debit"])
        .slice(0, 40);
      transaction.last_recalculate_timestamp = new Date();

      transactions.push(transaction);

      if (transactions.length === chunkSize) {
        await AppDataSource.manager.save(transactions);
        console.info(`Inserted ${i + 1} transactions`);
        transactions.length = 0; // Clear the array
      }
    }

    // Save any remaining transactions
    if (transactions.length > 0) {
      await AppDataSource.manager.save(transactions);
      console.info(`Inserted remaining ${transactions.length} transactions`);
    }

    console.timeEnd("Database Insertion Time");

    console.log("All transactions have been saved.");
  })
  .catch((error) =>
    console.log("Error during Data Source initialization:", error)
  );
