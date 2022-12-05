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

describe("Testing lecture-page if title is not Introduction", () => {
  window.ResizeObserver = ResizeObserver;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <LecturePage
          slug={slug}
          title={title}
          sources={sources}
          text={text}
          assignment={assignment}
          keyTermsIds={keyTermsIds}
          nextLecture={nextLecture}
        />
      </Provider>
    );
  });
  it('renders Article page if title is not "Introduction"', () => {
    expect(screen.getByText("Title Text")).toBeInTheDocument();
    expect(screen.getByText(text[0])).toBeInTheDocument();
  });
  it("renders each line of text in text array", () => {
    text.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
  it('does not render sources if title is not "Introduction"', () => {
    expect(screen.queryByText(sources[0].title)).not.toBeInTheDocument();
    expect(screen.queryByText(sources[1].title)).not.toBeInTheDocument();
  });
});
