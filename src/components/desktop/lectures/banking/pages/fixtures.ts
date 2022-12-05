export interface Props {
  slug: string[];
  title: string;
  sources: {
    author: string;
    title: string;
    link: string;
  }[];
  text: string[];
  assignment: string;
  keyTermsIds: number[];
  nextLecture: {
    id: number;
    lectureId: number;
  };
}

//TEST FIXTURES
export class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

export const props = {
  slug: ["path1", "path2"],
  title: "Title Text",
  sources: [
    {
      author: "author",
      title: "Source 1",
      link: "https://www.source1.com",
    },
    {
      author: "author",
      title: "Source 2",
      link: "https://www.source2.com",
    },
  ],
  text: ["p0", "p1", "p2", "p3"],
  assignment: "Assignment Text",
  keyTermsIds: [1, 2, 3],
  nextLecture: {
    id: 1,
    lectureId: 1,
  },
};
