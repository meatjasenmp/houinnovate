export enum HeaderTextSizes {
  XXL = "header_xxl",
  XL = "header_xl",
  L = "header_l",
  M = "header_m",
  S = "header_s",
  XS = "header_xs",
}

export enum BackgroundColors {
  RED = "bg-innovate-red",
  BLACK = "bg-innovate-black",
  PINK = "bg-innovate-pink",
  BLUE = "bg-innovate-blue",
  NEON = "bg-innovate-neon",
}

export enum LinkType {
  PAGE = "page",
  ANCHOR = "anchor",
}

export const backgroundColorMapping = (backgroundColor: string | null) => {
  switch (backgroundColor) {
    case "red":
      return BackgroundColors.RED;
    case "pink":
      return BackgroundColors.PINK;
    case "blue":
      return BackgroundColors.BLUE;
    case "neon":
      return BackgroundColors.NEON;
    default:
      return BackgroundColors.BLACK;
  }
};
