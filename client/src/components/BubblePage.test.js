import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockGetColors } from "../utils/getColors";

jest.mock('../utils/getColors');

const mockColorData = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4"
      },
      id: 4
    },
    {
      color: "lilac",
      code: {
        hex: "#9a99dd"
      },
      id: 5
    }
  ]
}

test("Fetches data and renders the bubbles", async () => {
  mockGetColors.mockResolvedValueOnce(mockColorData);
  const {rerender} = render(<BubblePage/>);

  await waitFor(() => {
    rerender(<BubblePage/>);
  });
  screen.debug();
  const colorName = screen.getByText(/limegreen/i);
  expect(colorName).toBeInTheDocument();
});
