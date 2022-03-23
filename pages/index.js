import { Main } from "../components/layouts";
import { About, Hero, Project, Skill } from "../components/modules";

function Home() {
  return (
    <>
      <Main>
        <Hero />
        <About />
        <Skill />
        <Project />
      </Main>
    </>
  );
}
export default Home;
