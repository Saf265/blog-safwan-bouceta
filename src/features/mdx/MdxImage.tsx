import Image from "next/image";

export const MdxImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={500} height={300} />;
};
