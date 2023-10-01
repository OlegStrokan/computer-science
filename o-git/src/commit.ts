import { ICommit } from "./core/ICommit";
import sha1 from "sha1";
import * as fs from "fs";

export class Commit implements ICommit {
  readonly id: string;
  message: string;
  parrent: ICommit | null;
  content: string;
  constructor(message: string, parent: ICommit | null) {
    this.message = message;
    this.parrent = parent;
    this.content = this.getStore();
    this.id = sha1(this.content);
    this.clearStore();
  }

  private clearStore(): void {
    fs.writeFileSync(`${__dirname}/../store.txt`, "");
  }

  private getStore(): string {
    return fs.readFileSync(`${__dirname}/../store.txt`, { encoding: "utf-8" });
  }

  getCommitLog(): string[] {
    let commitAux: ICommit | null = this;
    const history: string[] = [];
    while (commitAux) {
      history.push(commitAux.id);
      commitAux = commitAux.parrent;
    }
    return history;
  }
}
