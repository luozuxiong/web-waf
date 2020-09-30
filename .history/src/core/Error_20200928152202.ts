import { Log } from "../utils";
interface ErrorInstance {
  name: string;
  message: string;
}
export default class WafError implements Error {
  constructor(o: ErrorInstance) {
    this.name = o.name;
    this.message = o.message;
    Log.warn(o.message);
  }
  name: string;
  message: string;
  stack?: string | undefined;
}
