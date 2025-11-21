#!/usr/bin/env node

import { Command } from "commander";
import { helloWorldCmd } from "./app.js";

const program = new Command()
  .description("Node.js CLI Starter")
  .name("node-cli-starter")
  .version("1.0.0");

program.addCommand(helloWorldCmd);

program.parse();
