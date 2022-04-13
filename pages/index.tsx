import { NextPage } from "next";
import { Main } from "../components/layouts";
import { About, Hero, Project, Skill } from "../components/modules";

const Home: NextPage = () => {
  return (
    <Main>
      <>
        <Hero />
        <About />
        <Skill />
        <Project />
        <div>

        </div>
      </>
    </Main>
  );
};
export default Home;
