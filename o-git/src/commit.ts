import { ICommit } from "./core/ICommit";
import * as fs from 'fs';
import * as path from 'path';
import sha1 from 'sha1';
import {IGit} from "./core/IGit";

export class Commit implements ICommit {
  readonly id: string;
  message: string;
  parent: ICommit | null;
  content: string;

  constructor(message: string, parent: ICommit | null) {
    this.message = message;
    this.parent = parent;
    this.content = this.getStore();
    this.id = sha1(this.content);
    this.clearStore();
  }

  private clearStore(): void {
    fs.writeFileSync(path.join(__dirname, '../store.txt'), '');
  }

  private getStore(): string {
    return fs.readFileSync(path.join(__dirname, '../store.txt'), { encoding: 'utf-8' });
  }

  getCommitLog(): string[] {
    let commitAux: ICommit | null = this;
    const history: string[] = [];
    while (commitAux) {
      history.push(commitAux.id);
      commitAux = commitAux.parent;
    }
    return history;
  }
}
