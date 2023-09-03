import { render, screen } from "@testing-library/react";
import Card from "../../../../src/app/four-card-feature/components/card";
import "@testing-library/jest-dom";

describe("Given Card component rendered", () => {
  const props = {
    title: "any title",
    content: "any content",
    color: "any color",
    imageName: "any_image",
  }

  beforeEach(() => {
    render(<Card { ...props } / >);
  });

  it("Then should render a principal text with received props title", () => {
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(props.title);
  });

  it("Then should render a paragraph text with received props content", () => {
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });

  it("Then should render an image with source defined", () => {
    expect(screen.getByRole("img")).toHaveAttribute("src", `/four-card-feature/${props.imageName}.svg`);
  });

  it("Then should define image name props as image alt text", () => {
    expect(screen.getByAltText(props.imageName)).toBeInTheDocument();
  });
});

