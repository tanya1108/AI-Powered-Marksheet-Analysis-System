import { render } from "@testing-library/react";
import Home from "../upload/page";
import supabase from "../supabase";
import Search from "../search/page";

jest.mock("../supabase", () => ({
  from: jest.fn(() => ({
    select: jest.fn(() => ({
      eq: jest.fn(() => ({
        single: jest.fn(() => ({
          data: { id: "123", name: "John Doe", scores: "[1, 2, 3]" },
          error: null,
        })),
      })),
    })),
  })),
}));

describe("Home component", () => {
  test("Database Insertion Successful", async () => {
    render(<Home />);

    // Mock the Tesseract.recognize function
    jest.spyOn(supabase, "from").mockReturnValueOnce({
      insert: jest.fn().mockResolvedValue({ error: null }),
    });

    // Mock the supabase.from().insert function
    jest
      .spyOn(supabase.from("accounts"), "insert")
      .mockResolvedValue({ error: null });
  }),
    test("Database Insertion Fail", async () => {
      supabase.from().select().eq().single.mockResolvedValueOnce({
        data: null,
        error: "Error message",
      });

      render(<Search />);
    }),
    test("Search Failure", async () => {
      const errorMessage = "Error message";

      supabase.from().select().eq().single.mockResolvedValueOnce({
        data: null,
        error: errorMessage,
      });

      render(<Search />);
    });
  test("Search Successful", async () => {
    const mockData = {
      id: 123,
      name: "John Doe",
      scores:
        '[{"subject":"Math","score":90},{"subject":"Science","score":85}]',
    };
    supabase.from().select().eq().single.mockResolvedValueOnce({
      data: mockData,
      error: null,
    });
    render(<Search />);
  });
});
