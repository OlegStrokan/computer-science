import { IAdd } from "./core/IAdd";
import * as fs from "fs";

export class Add implements IAdd {
  private dbPath: string;
  constructor(dbPath?: string) {
    this.dbPath = dbPath || "./store.txt";
  }

  stageFile(path: string): boolean {
    if (fs.existsSync(path)) {
      try {
        fs.writeFileSync(this.dbPath, path);
        return true;
      } catch (error) {
        console.error("Error on stage", error);
        return false;
      }
    }
    return false;
  }
}
