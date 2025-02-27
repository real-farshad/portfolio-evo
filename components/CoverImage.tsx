import st from "@/styles/CoverImage.module.scss";

interface CoverImageProps {
  src: string;
}

const CoverImage = ({ src }: CoverImageProps) => {
  return (
    <div
      className={st["cover-image"]}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
};

export default CoverImage;
