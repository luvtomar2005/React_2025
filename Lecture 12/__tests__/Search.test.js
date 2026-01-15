import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);
test("should filter restaurants based on search input", async () => {
  // Render component with router context
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // Wait for initial render after fetch
  await screen.findByTestId("searchInput");

  // Get search elements
  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: /search/i });

  // User types "pizza"
  fireEvent.change(searchInput, {
    target: { value: "pizza" },
  });

  // User clicks search
  fireEvent.click(searchBtn);

  // Since "pizza" matches NOTHING in mock data,
  // zero restaurant cards should be rendered
  const cards = screen.queryAllByTestId("resCard");
  expect(cards.length).toBe(0);
});
