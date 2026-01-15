import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import UserContext from "../utils/UserContext";

test("should render restaurant Component with props", () => {
  render(
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser: "Luv" }}>
        <RestaurantCard resData={MOCK_DATA} />
      </UserContext.Provider>
    </BrowserRouter>
  );

  const name = screen.getByText("Burger King");
  expect(name).toBeInTheDocument();
});

