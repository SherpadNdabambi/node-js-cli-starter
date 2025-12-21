/**
 * @file setup.test.ts
 * @description module containing the tests for the getCurrentValues function
 *
 * @test {getCurrentValues} should return current project details
 */
import { getCurrentValues } from "../../assets/ts/setup/getCurrentValues";
import promisesModule from "fs/promises";

jest.mock("fs/promises");

describe("getCurrentValues", () => {
  test("should return current project details", async () => {
    jest.spyOn(promisesModule, "readFile").mockResolvedValueOnce(`{
  "author": "Author",
  "description": "Description",
  "name": "project-name",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/author/project-name.git"
  }
}`).mockResolvedValueOnce(`# Project Name

mailto:author@example.com
`);

    const currentValues = await getCurrentValues();
    expect(currentValues.currentAuthor).toBe("Author");
    expect(currentValues.currentDesc).toBe("Description");
    expect(currentValues.currentEmail).toBe("author@example.com");
    expect(currentValues.currentProjectName).toBe("Project Name");
    expect(currentValues.currentSlug).toBe("project-name");
    expect(currentValues.currentUsername).toBe("author");
  });
});
