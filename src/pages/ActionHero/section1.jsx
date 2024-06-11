import Container from "../../components/Container";
import ActionHeroBG from "../../images/ActionHero/actionHeroBG.png";
const Section1 = () => {
  return (
    <Container className={"!py-0"}>
      <div
        className={"h-screen flex flex-col gap-[32px] items-center p-[65px]"}
        style={{ backgroundImage: `url(${ActionHeroBG})` }}
      >
        <span>Think AI Automated Actions. Think AI Action Hero.</span>
      </div>
    </Container>
  );
};
export default Section1;
