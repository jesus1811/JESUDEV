import { useEffect } from "react";
import {init} from "aos";
interface Props {
  children: string;
}
export const LabelMain = ({ children }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <h2 className="text-[40px] text-[#61dafb] font-semibold" data-aos="fade-up">
      {children}
    </h2>
  );
};
