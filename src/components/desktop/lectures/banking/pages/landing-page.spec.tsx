// __tests__/index.test.jsx
import { Provider } from "react-redux";
import store from "../../../../../app/store";
import LandingPage from "./landing-page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { homeTexts } from "../../../../../config/homeTexts";
import { ResizeObserver } from "./fixtures";

const title = "Title Text";
const nextPath = "path1/path2/path3";
const id = 0;
const { text } = homeTexts[id];

describe("testing landing page", () => {
  window.ResizeObserver = ResizeObserver;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <LandingPage title={title} text={text} nextPath={nextPath} id={id} />
      </Provider>
    );
  });

  test("should render title", () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("should render text", () => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
