import { render, screen } from "@testing-library/react";
import Page from "../../../src/app/four-card-feature/page";
import "@testing-library/jest-dom";

describe("Given the page component rendered", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("Then should find a heading text one with text", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Reliable, efficient delivery");
  });

  it("Then should find a heading text two with text", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Powered by Technology");
  });

  it("Then should find a content text with informative message", () => {
    const element = screen.getByText(
      "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
    );
    expect(element).toBeInTheDocument();
  });

  const cards = [
    {
      title: "Supervisor",
      content: "Monitors activity to identify project roadblocks",
      imageName: "icon-supervisor"
    },
    {
      title: "Team Builder",
      content: "Scans our talent network to create the optimal team for your project",
      imageName: "icon-team-builder"
    },
    {
      title: "Karma",
      content: "Regularly evaluates our talent to ensure quality",
      imageName: "icon-karma"
    },
    {
      title: "Calculator",
      content: "Uses data from past projects to provide better delivery estimates",
      imageName: "icon-calculator"
    }
  ];

  describe.each(cards)("And the cards should the validated", (element) => {
    const cardIndex = cards.indexOf(element);
    const { title, content, imageName } = element;

    it(`Then should find card title with ${title}`, () => {
      const cardHeading = screen.getAllByRole("heading", { level: 3 });
      expect(cardHeading[cardIndex]).toHaveTextContent(title);
    });

    it("Then should find card content text with expected text", () => {
      const cardContent = screen.getByText(content);
      expect(cardContent).toBeInTheDocument();
    });

    it(`Then should find an image with ${imageName} on source`, () => {
      const cardImage = screen.getAllByRole("img");
      expect(cardImage[cardIndex]).toHaveAttribute("src", `/four-card-feature/${imageName}.svg`)
    });
  });
});
