#!/usr/bin/env ts-node

import { Command } from "commander";
import login from "../src/commands/login";
import whoami from "../src/commands/whoami";
import events from "../src/commands/events";

const program = new Command();
program.name("cal-cli").description("CLI for Cal.com").version("1.0.0");

program.command("login").description("Log in to Cal.com").action(login);
program.command("whoami").description("Show user info").action(whoami);
program.command("events").description("List scheduled events").action(events);

program.parse();
