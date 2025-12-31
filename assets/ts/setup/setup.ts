/**
 * @file setup.ts
 * @description module containing the functions for setting up the project
 */
import { getCurrentValues } from "./getCurrentValues.js";
import { readFile, writeFile } from "fs/promises";
import inquirer from "inquirer";

/**
 * Prompts the user for replacement values and updates the project files
 *
 * @returns {Promise<void>} A promise that resolves when the setup is complete
 */
async function setup() {
  const currents = await getCurrentValues();

  // Prompt user for replacement values (with current as defaults for re-runs)
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: currents.currentProjectName || "My Project",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Enter your project description:",
      default: currents.currentDesc || "A Node.js project",
    },
    {
      type: "input",
      name: "projectSlug",
      message: "Enter your project slug (kebab-case, e.g., my-project):",
      default: currents.currentSlug || "my-project",
    },
    {
      type: "input",
      name: "authorName",
      message: "Enter your name:",
      default: currents.currentAuthor || "Your Name",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Enter your GitHub username:",
      default: currents.currentUsername || "YourGitHubUsername",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
      default: currents.currentEmail || "your_email@address.com",
    },
  ]);

  // Validate: Prevent exact name/slug match to avoid replacement overlap
  if (answers.projectName.toLowerCase() === answers.projectSlug) {
    console.log(
      "Warning: Project name and slug should differ (e.g., title-case name). Reprompting..."
    );
    const namePrompt = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Enter your project name (title-case, e.g., My App):",
        default:
          answers.projectName.charAt(0).toUpperCase() +
          answers.projectName.slice(1),
      },
    ]);
    answers.projectName = namePrompt.projectName;
  }

  const replacements = [
    // cli.ts
    {
      file: "assets/ts/cli.ts",
      search: currents.currentSlug,
      replace: answers.projectSlug,
    },
    // CHANGELOG.md
    {
      file: "CHANGELOG.md",
      search: currents.currentSlug,
      replace: answers.projectSlug,
    },
    {
      file: "CHANGELOG.md",
      search: currents.currentProjectName,
      replace: answers.projectName,
    },
    {
      file: "CHANGELOG.md",
      search: currents.currentUsername,
      replace: answers.githubUsername,
    },
    // LICENSE
    {
      file: "LICENSE",
      search: currents.currentAuthor,
      replace: answers.authorName,
    },
    // package.json
    {
      file: "package.json",
      search: currents.currentSlug,
      replace: answers.projectSlug,
    },
    {
      file: "package.json",
      search: currents.currentUsername,
      replace: answers.githubUsername,
    },
    {
      file: "package.json",
      search: currents.currentAuthor,
      replace: answers.authorName,
    },
    {
      file: "package.json",
      search: currents.currentDesc,
      replace: answers.projectDescription,
    },
    // README.md
    {
      file: "README.md",
      search: currents.currentProjectName,
      replace: answers.projectName,
    },
    {
      file: "README.md",
      search: currents.currentDesc,
      replace: answers.projectDescription,
    },
    {
      file: "README.md",
      search: currents.currentSlug,
      replace: answers.projectSlug,
    },
    {
      file: "README.md",
      search: currents.currentUsername,
      replace: answers.githubUsername,
    },
    {
      file: "README.md",
      search: `mailto:${currents.currentEmail}`,
      replace: `mailto:${answers.email}`,
    },
  ];

  // Process each replacement
  for (const { file, search, replace } of replacements) {
    try {
      const content = await readFile(file, "utf8");
      const updatedContent = content.replace(new RegExp(search, "g"), replace);
      await writeFile(file, updatedContent, "utf8");
      console.log(`Updated ${file}`);
    } catch (error) {
      console.error(`Error updating ${file}:`, error);
    }
  }

  console.log("Project setup complete.");
}

// Run the setup
setup().catch((error) => {
  console.error("Project setup failed:", error);
  process.exit(1);
});

export { setup };
