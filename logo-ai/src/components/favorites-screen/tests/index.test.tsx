import { when } from "jest-when";
import { render, screen } from "@testing-library/react-native";
import { FavoritesScreen } from "../index";

jest.mock("../../../hooks/use-favorite-logo");

import { useFavoriteLogo } from "../../../hooks/use-favorite-logo";

describe("<FavoritesScreen />", () => {
  it("should not display any images on component render", () => {
    when(useFavoriteLogo).mockReturnValue({
      getSaveLogos: jest.fn(),
      saveLogoFile: jest.fn(),
      favLogosDir: "",
      deleteLogoFile: jest.fn(),
      errorMessage: "",
      message: "",
      logos: [],
    });
    render(<FavoritesScreen />);

    expect(screen.queryAllByTestId("logos")).toHaveLength(0);
    expect(screen.getByText("You dont have any favorite logos yet"));
  });

  it("should display three images on load", () => {
    when(useFavoriteLogo).mockReturnValue({
      getSaveLogos: jest.fn(),
      saveLogoFile: jest.fn(),
      favLogosDir: "",
      deleteLogoFile: jest.fn(),
      errorMessage: "",
      message: "",
      logos: [
        "https://fakeimage.com/urls0.png",
        "https://fakeimage.com/urls1.png",
        "https://fakeimage.com/urls2.png",
      ],
    });

    render(<FavoritesScreen />);
    expect(screen.queryAllByTestId("logos")).toHaveLength(3);
  });
});
