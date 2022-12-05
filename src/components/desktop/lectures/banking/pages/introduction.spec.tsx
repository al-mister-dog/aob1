// __tests__/index.test.jsx
import { Provider } from "react-redux";
import store from "../../../../../app/store";
import LecturePage from "./lecture-page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { props } from "./fixtures";
import { ResizeObserver } from "./fixtures";

const { slug, title, sources, text, assignment, keyTermsIds, nextLecture } =
  props;

describe("Testing lecture-page if title is Introduction", () => {
  window.ResizeObserver = ResizeObserver;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <LecturePage
          slug={slug}
          title="Introduction"
          sources={sources}
          text={text}
          assignment={assignment}
          keyTermsIds={keyTermsIds}
          nextLecture={nextLecture}
        />
      </Provider>
    );
  });
  it('renders Introduction page if title is "Introduction"', () => {
    expect(screen.getByText("Introduction")).toBeInTheDocument();
    expect(screen.getByText(text[0])).toBeInTheDocument();
  });
  it("renders each line of text in text array", () => {
    text.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
  it('renders each source if title is "Introduction"', () => {
    expect(screen.getByText(sources[0].title)).toBeInTheDocument();
    expect(screen.getByText(sources[1].title)).toBeInTheDocument();
  });
  it('does not render assignment if title is "Introduction"', () => {
    expect(screen.queryByText(assignment)).not.toBeInTheDocument();
  });
});
