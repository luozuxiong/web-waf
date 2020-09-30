import Path from "path";

const isTest = (process.env.isTest as any) === true;

export const root: string = Path.resolve(
  __dirname,
  isTest ? "../../../test" : "../../../../../"
);
