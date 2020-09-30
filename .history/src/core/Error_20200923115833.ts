import { Log } from "../utils";
export default class WafError implements Error {
  constructor(name: string, message: string) {
    this.name = name;
    this.message = message;
    Log.name
  }
  name: string;
  message: string;
  stack?: string | undefined;
}
