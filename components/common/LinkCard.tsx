interface Props {
  enlace: string;
  icon: string;
}
export const LinkCard = ({ enlace, icon }: Props) => {
  return (
    <a href={enlace} target="_blank" rel="noreferrer">
      <img
        className="w-[90px] border-2 border-transparent rounded-[50%] hover:border-[#61dafb]"
        src={icon}
        alt=""
      />
    </a>
  );
};
