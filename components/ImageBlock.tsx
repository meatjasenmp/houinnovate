import Image from "next/future/image";

interface ImageBlockProps {
  image: any | null;
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
