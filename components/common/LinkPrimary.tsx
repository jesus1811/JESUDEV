interface Props {
  children: string;
  href: string;
}

export const LinkPrimary = ({ children, href }: Props) => {
  return (
    <a
      className="py-2 px-4 rounded border-2 border-[#61dafb]
    text-black transition-all text-[20px] bg-[#61dafb] cursor-pointer  hover:bg-[#53bbd8] hover:border-[#53bbd8]"
      href={href}
      target="_blank"
      rel="noreferrer"
      download="descarga"
    >
      {children}
    </a>
  );
};
