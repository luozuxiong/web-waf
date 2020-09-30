import { Log } from "../utils";
interface ErrorInstance {
  name: string;
  message: string;
  stack?: string | undefined;
}
export default class WafError implements Error {
  constructor(error: ErrorInstance) {
    this.name = error.name;
    this.message = error.message;
    this.stack = error.stack;
    Log.warn(error.message);
  }
  name: string;
  message: string;
  stack?: string | undefined;
}
