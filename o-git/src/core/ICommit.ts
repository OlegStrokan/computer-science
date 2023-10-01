export interface ICommit {
  id: string;
  message: string;
  parent: ICommit | null;
  getCommitLog: () => string[];
}
