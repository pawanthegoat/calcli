import inquirer from "inquirer";
import fs from "fs";
import path from "path";

export default async function login() {
  const { token } = await inquirer.prompt([
    {
      type: "input",
      name: "token",
      message: "Enter your Cal.com API token:",
    },
  ]);

  const configPath = path.join(__dirname, "../../.env");
  fs.writeFileSync(configPath, `CAL_API_TOKEN=${token}`);
  console.log("✅ Token saved!");
}
