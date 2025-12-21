/**
 * @file printHelloWorldCmd.test.ts
 * @description module containing the tests for the printHelloWorldCmd command
 *
 * @test {printHelloWorldCmd} should call printHelloWorld
 */
import * as printHelloWorldModule from "../../assets/ts/printHelloWorld";
import { printHelloWorldCmd } from "../../assets/ts/printHelloWorldCmd";

jest.mock("../../assets/ts/printHelloWorld");

describe("printHelloWorldCmd", () => {
  test("should call printHelloWorld", () => {
    const mockPrintHelloWorld = jest
      .spyOn(printHelloWorldModule, "printHelloWorld")
      .mockImplementation();

    printHelloWorldCmd.parse();

    expect(mockPrintHelloWorld).toHaveBeenCalled();
  });
});
