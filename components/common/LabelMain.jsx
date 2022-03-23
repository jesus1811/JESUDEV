import { useEffect } from "react";
import Aos from "aos";
export const LabelMain = ({ title }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <h2 className="text-[40px] text-[#61dafb] font-semibold" data-aos="fade-up">
      {title}
    </h2>
  );
};
