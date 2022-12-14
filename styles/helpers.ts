import { Components } from "../components/helpers";

export enum BackgroundColors {
  RED = "bg-innovate-red",
  BLACK = "bg-innovate-black",
  PINK = "bg-innovate-pink",
  BLUE = "bg-innovate-blue",
  NEON = "bg-innovate-neon",
  WHITE = "bg-innovate-white",
}

export enum TextColors {
  RED = "text-innovate-red",
  BLACK = "text-innovate-black",
  PINK = "text-innovate-pink",
  BLUE = "text-innovate-blue",
  NEON = "text-innovate-neon",
  WHITE = "text-innovate-white",
}

export enum Colors {
  RED = "red",
  BLACK = "black",
  PINK = "pink",
  BLUE = "blue",
  NEON = "neon",
  WHITE = "white",
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
    case Colors.WHITE:
      return BackgroundColors.WHITE;
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

export const accentColor = (
  backgroundColor: string | null,
  component?: Components
) => {
  if (backgroundColor === Colors.NEON || backgroundColor === Colors.PINK) {
    return "black";
  }
  return "white";
};

// export const alphabelticalSort = () => {
//   const arrayForSort = [...(communityInvestments?.edges || [])];
//
//   const sort = arrayForSort.sort((a, b) => {
//     const { communityAndOpportunityPopUps } = a?.node || {};
//     const { alphanumericLabel } = communityAndOpportunityPopUps || {};
//     const { communityAndOpportunityPopUps: bCommunityAndOpportunityPopUps } =
//     b?.node || {};
//     const { alphanumericLabel: bAlphanumericLabel } =
//     bCommunityAndOpportunityPopUps || {};
//
//     if (alphanumericLabel && bAlphanumericLabel) {
//       return alphanumericLabel.localeCompare(bAlphanumericLabel);
//     }
//   });
//
//   console.log(sort);
// }
