import { useEffect } from "react";
import { init } from "aos";
import { Label } from "./styles";
interface Props {
  children: string;
}
export const LabelMain = ({ children }: Props) => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);
  return (
    <Label data-aos="fade-up">{children}</Label>
  );
};
