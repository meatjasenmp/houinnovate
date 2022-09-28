import Image from "next/future/image";
import { page_page_components_componentBlocks_image } from "../pages/api/__generated__/page";

interface ImageBlockProps {
  image: page_page_components_componentBlocks_image | null;
  height: string;
  width: string;
}

const ImageBlock = ({ image, width, height }: ImageBlockProps) => {
  const imageSrc = image?.mediaItemUrl as string;
  const imageAlt = image?.altText as string;
  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={width}
      height={height}
      style={{ objectFit: "cover", height: "100%", width: "100%" }}
    />
  );
};

export default ImageBlock;
