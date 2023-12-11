import { when } from "jest-when";
import { render, screen } from "@testing-library/react-native";
import { SearchScreen } from "../index";

jest.mock("../../../hooks/use-favorite-logo");
jest.mock("../../../hooks/use-generate-logo");

import { useFavoriteLogo } from "../../../hooks/use-favorite-logo";
import { useGenerateLogoMutation } from "../../../hooks/use-generate-logo";

describe("<SearchScreen />", () => {
  it("should not display any images on component render", () => {
    //@ts-ignore -- only using expected fields for test
    when(useFavoriteLogo).mockReturnValue({
      message: "",
    });
    //@ts-ignore -- only using expected fields for test
    when(useGenerateLogoMutation).mockReturnValue({
      isPending: false,
      data: [],
    });
    render(<SearchScreen />);

    expect(screen.queryAllByTestId("logos")).toHaveLength(0);
  });

  it("should display three images on load", () => {
    //@ts-ignore -- only using expected fields for test
    when(useFavoriteLogo).mockReturnValue({
      message: "",
    });
    //@ts-ignore -- only using expected fields for test
    when(useGenerateLogoMutation).mockReturnValue({
      isPending: false,
      data: [
        { url: "https://fakeimage.com/urls0.png" },
        { url: "https://fakeimage.com/urls1.png" },
        { url: "https://fakeimage.com/urls2.png" },
      ],
    });

    render(<SearchScreen />);
    expect(screen.queryAllByTestId("logos")).toHaveLength(3);
  });
});
