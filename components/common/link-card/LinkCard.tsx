import { Image } from "./styles";

interface Props {
  enlace: string;
  icon: string;
}
export const LinkCard = ({ enlace, icon }: Props) => {
  return (
    <a href={enlace} target="_blank" rel="noreferrer">
      <Image src={icon} alt="" data-aos="fade-up" />
    </a>
  );
};
