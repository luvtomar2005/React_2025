import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import UserContext from "../utils/UserContext";
import "@testing-library/jest-dom";

const renderHeader = () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Luv" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

test("should render Header with Login button", () => {
  renderHeader();
  expect(screen.getByText("Login")).toBeInTheDocument();
});

test("should change Login button to Logout on click", () => {
  renderHeader();

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});





/* You pass store={appStore} because Provider needs a Redux store instance to work.
Without it, every useSelector and useDispatch call inside Header will crash. */