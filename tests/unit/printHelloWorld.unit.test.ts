/**
 * @file helloWorld.test.ts
 * @description module containing the tests for the printHelloWorld function
 *
 * @test {printHelloWorld} should call console.log with "Hello, Node.js!"
 */
import { printHelloWorld } from "../../assets/ts/printHelloWorld";

// Test the printHelloWorld function
describe("printHelloWorld", () => {
  test('should call console.log with "Hello, Node.js!"', () => {
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    // Call the function
    printHelloWorld();

    // Check if console.log was called with "Hello, Node.js!"
    expect(consoleSpy).toHaveBeenCalledWith("Hello, Node.js!");

    // Clean up the spy
    consoleSpy.mockRestore();
  });
});
