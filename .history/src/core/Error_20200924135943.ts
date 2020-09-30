import { Log } from "../utils";
export default class WafError implements Error {
  constructor(o: Error) {
    this.name = o.name;
    this.message = o.message;
    Log.console(o.message);
  }
  name: string;
  message: string;
  stack?: string | undefined;
}
