export interface ICommit {
  id: string;
  message: string;
  parrent: ICommit | null;
  getCommitLog: () => string[];
}
