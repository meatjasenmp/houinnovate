import Image from "next/future/image";

interface ImageBlockProps {
  image: any | null;
  height: string;
  width: string;
  priority?: boolean;
}

const ImageBlock = ({ image, width, height, priority }: ImageBlockProps) => {
  const imageSrc = image?.mediaItemUrl as string;
  const imageAlt = image?.altText as string;
  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={width}
      height={height}
      style={{ objectFit: "cover", height: "100%", width: "100%" }}
      priority={priority}
    />
  );
};

export default ImageBlock;
