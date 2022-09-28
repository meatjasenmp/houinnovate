import Image from "next/image";
import { page_page_components_componentBlocks_image } from "../pages/api/__generated__/page";

interface ImageBlockProps {
  image: page_page_components_componentBlocks_image | null;
}

const ImageBlock = ({ image }: ImageBlockProps) => {
  const imageSrc = image?.mediaItemUrl as string;
  const imageAlt = image?.altText as string;
  return <Image src={imageSrc} alt={imageAlt} layout="fill" />;
};

export default ImageBlock;
