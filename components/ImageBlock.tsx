import Image from "next/future/image";
import {
  page_page_components_componentBlocks_image,
  page_page_components_componentBlocks_videoCover,
} from "../pages/api/__generated__/page";

interface ImageBlockProps {
  image:
    | page_page_components_componentBlocks_image
    | page_page_components_componentBlocks_videoCover
    | null;
}

const ImageBlock = ({ image }: ImageBlockProps) => {
  const imageSrc = image?.mediaItemUrl as string;
  const imageAlt = image?.altText as string;
  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width="1920"
      height="1080"
      style={{ objectFit: "cover", height: "100%", width: "100%" }}
    />
  );
};

export default ImageBlock;
