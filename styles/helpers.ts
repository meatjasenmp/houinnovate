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

export enum TextColors {
  RED = "text-innovate-red",
  BLACK = "text-innovate-black",
  PINK = "text-innovate-pink",
  BLUE = "text-innovate-blue",
  NEON = "text-innovate-neon",
}

export enum Colors {
  RED = "red",
  BLACK = "black",
  PINK = "pink",
  BLUE = "blue",
  NEON = "neon",
}

export enum LinkType {
  PAGE = "page",
  ANCHOR = "anchor",
}

export const backgroundColorMapping = (backgroundColor: string | null) => {
  switch (backgroundColor) {
    case Colors.RED:
      return BackgroundColors.RED;
    case Colors.PINK:
      return BackgroundColors.PINK;
    case Colors.BLUE:
      return BackgroundColors.BLUE;
    case Colors.NEON:
      return BackgroundColors.NEON;
    default:
      return BackgroundColors.BLACK;
  }
};

export const textColorMapping = (textColor: string | null) => {
  switch (textColor) {
    case Colors.RED:
      return TextColors.RED;
    case Colors.PINK:
      return TextColors.PINK;
    case Colors.BLUE:
      return TextColors.BLUE;
    case Colors.NEON:
      return TextColors.NEON;
    default:
      return TextColors.BLACK;
  }
};
