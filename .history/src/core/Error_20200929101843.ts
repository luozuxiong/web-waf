import { Log } from "../utils";
interface ErrorInstance {
  name: string;
  message: string;
}
export default class WafError implements Error {
  constructor(error: ErrorInstance) {
    this.name = error.name;
    this.message = error.message;
    Log.warn(error.message);
  }
  name: string;
  message: string;
  stack?: string | undefined;
}
