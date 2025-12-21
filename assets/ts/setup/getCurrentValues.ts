/**
 * @file getCurrentValues.ts
 * @description module containing the getCurrentValues function
 *
 * @exports getCurrentValues
 */
import { readFile } from "fs/promises";

/**
 * Retrieves the current values from the project files
 *
 * @returns {Promise<{ currentSlug: string; currentAuthor: string; currentDesc: string; currentUsername: string; currentEmail: string; currentProjectName: string; }>}
 *          A promise that resolves to an object containing the current project details
 */
async function getCurrentValues() {
  const pkgStr = await readFile("package.json", "utf8"),
    pkg = JSON.parse(pkgStr),
    currentAuthor =
      typeof pkg.author === "string" ? pkg.author : pkg.author?.name || "",
    currentDesc = pkg.description || "",
    currentSlug = pkg.name,
    repoMatch = pkg.repository?.url?.match(/github\.com\/([^\/]+)\//),
    currentUsername = repoMatch ? repoMatch[1] : "",
    readmeStr = await readFile("README.md", "utf8"),
    emailMatch = readmeStr.match(/mailto:([^&\s]+)/),
    currentEmail = emailMatch ? emailMatch[1] : "",
    projectNameMatch = readmeStr.match(/^#\s*(.+?)\s*$/m),
    currentProjectName = projectNameMatch ? projectNameMatch[1].trim() : "";

  // Debugging
  console.debug("pkgStr", pkgStr);

  return {
    currentAuthor,
    currentDesc,
    currentEmail,
    currentProjectName,
    currentSlug,
    currentUsername,
  };
}

export { getCurrentValues };
