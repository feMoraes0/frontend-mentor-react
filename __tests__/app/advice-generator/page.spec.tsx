
import { render, screen } from "@testing-library/react";
import AdviceGenerator from "../../../src/app/advice-generator/page";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

const mockFetchAdapter = {
  get: jest.fn(),
}
jest.mock("../../../src/app/advice-generator/infra/http/FetchAdapter", () => jest.fn(() => mockFetchAdapter));

describe("Given the advice generator component without any API error", () => {

  beforeAll(() => {
    jest.clearAllMocks();
    mockFetchAdapter.get.mockResolvedValue({ id: 1, quote: "any_quote" });
  });

  it("Then should find a paragraph with advice id", async () => {
    act(() => render(<AdviceGenerator />));
    const paragraph = await screen.findByText("Advice #1")
    expect(paragraph).toBeInTheDocument();
  });

  it("Then should find a heading 1 element with API quote answer", async () => {
    act(() => render(<AdviceGenerator />));
    const heading1 = await screen.findByRole("heading", { level: 1 });
    expect(heading1).toHaveTextContent("any_quote");
  });

  it("Then should find an image with alt defined as divider", async () => {
    act(() => render(<AdviceGenerator />));
    const image = (await screen.findAllByRole("img")).at(0);
    expect(image).toHaveAttribute("alt", "divider");
  });

  it("Then should find an image with source defined with image name", async () => {
    act(() => render(<AdviceGenerator />));
    const image = (await screen.findAllByRole("img")).at(0);
    expect(image).toHaveAttribute("src", "./advice-generator/pattern-divider-desktop.svg");
  });

  it("Then should find an image with alt defined as dice", async () => {
    act(() => render(<AdviceGenerator />));
    const image = (await screen.findAllByRole("img")).at(1);
    expect(image).toHaveAttribute("alt", "dice");
  });

  it("Then should find an image with source defined with image name", async () => {
    act(() => render(<AdviceGenerator />));
    const image = (await screen.findAllByRole("img")).at(1);
    expect(image).toHaveAttribute("src", "./advice-generator/icon-dice.svg");
  });
});
