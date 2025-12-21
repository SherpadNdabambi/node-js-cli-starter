#!/usr/bin/env node
/**
 * @file cli.ts
 * @description main entry point for Node.js CLI Starter
 */
import { Command } from "commander";
import "dotenv/config";
import { printHelloWorldCmd } from "./printHelloWorldCmd.js";

const program = new Command()
  .description("Node.js CLI Starter")
  .name("node-cli-starter")
  .version("1.0.4");

program.addCommand(printHelloWorldCmd);

program.parse();
