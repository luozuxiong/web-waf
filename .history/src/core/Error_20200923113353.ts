export default class WafError extends Error {
  constructor(name: string, message: string) {
    this.name = name;
    this.message = message;
  }
  name: string;
  message: string;
  stack?: string | undefined;
}
