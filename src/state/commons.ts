export interface ThunkActionMap {
  [key: string]: (...args: any[]) => any;
}
