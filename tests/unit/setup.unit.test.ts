/**
 * @file setup.unit.test.ts
 * @description module containing the tests for the setup function
 *
 * @test {setup} should update project files based on user input
 */
import * as getCurrentValuesModule from "../../assets/ts/setup/getCurrentValues.js";
import { setup } from "../../assets/ts/setup/setup";

jest.mock("../../assets/ts/setup/getCurrentValues.js");

describe("setup", () => {
  test("should call writeFile with the correct arguments", async () => {
    jest.spyOn(getCurrentValuesModule, "getCurrentValues").mockResolvedValue({
      currentAuthor: "Author",
      currentDesc: "Description",
      currentEmail: "author@example.com",
      currentProjectName: "Project Name",
      currentSlug: "project-name",
      currentUsername: "author",
    });

    await setup();
  });
});
