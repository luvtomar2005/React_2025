import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";


// test -> it 
describe("Contact us Page test cases" , ()  => {
  beforeAll(() => {
    console.log("Before All")
  })
  beforeEach(() => {
    console.log("Before Each")
  })
  
  afterAll(() => {
    console.log("After all")
  })
  afterEach(() => {
    console.log("After Each")
  })
  it("should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("should load name inside  component", () => {
  render(<Contact />);

  const inputName  = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});

it("should load 2 input boxes  on the contact component", () => {
  render(<Contact />);

  const inputBoxes   = screen.getAllByRole("textbox");
  // getAllByRole("textbox") returns an array of input elements

  console.log(inputBoxes[0]);
});
})

/*
import { render, screen } from "@testing-library/react";
What this actually does
render:
Takes a React component
Mounts it into a fake DOM (jsdom)
Simulates what the browser would do
Without render, your component is just a function returning JSX — nothing exists in the DOM.
screen:
A global query API
Lets you search the rendered DOM the same way a user would
Prevents you from relying on implementation details

import "@testing-library/jest-dom";
This is critical and often misunderstood.
What this does
Extends Jest’s expect
Adds DOM-specific matchers like:
toBeInTheDocument
toHaveTextContent
toBeVisible

test("should render Contact component heading", () => { ... })
This defines one test case.
"should render Contact component heading":
Just a label
Used for reporting
Should describe observable behavior, not implementation
The callback function:
Jest runs this
If it throws → test fails
If it completes → test pass
his is where Testing Library’s philosophy shows.
What it does
Searches the rendered DOM
Finds an element whose ARIA role is heading
Roles come from:
<h1>–<h6>
Proper accessibility semantics
If:
No heading exists → test fails
Multiple headings exist → test fails (ambiguous)
This forces you to write accessible markup.
Why this is superior
You’re not testing:
class names ❌
IDs ❌
internal structure ❌
You’re testing:
“Does the page have a heading?”
Which is exactly what users (and screen readers) care about.


expect(heading).toBeInTheDocument();

This is the assertion.
What this checks
heading is not null
It is attached to document.body
In other words:
“This heading actually rendered.”
If the component:
crashes → fail
conditionally hides heading → fail
removes it later → fail

*/