/**
 * @file printHelloWorldCmd.ts
 * @description module containing the printHelloWorldCmd command
 *
 * @exports printHelloWorldCmd
 */
import { Command } from "commander";
import { printHelloWorld } from "./printHelloWorld.js";

const printHelloWorldCmd = new Command()
  .action(printHelloWorld)
  .description("Prints 'Hello, Node.js!'")
  .name("greet");

export { printHelloWorldCmd };
