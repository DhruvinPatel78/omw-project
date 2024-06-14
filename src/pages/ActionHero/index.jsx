import Section1 from "./section1";
import ActionHeroImg from "../../images/ActionHero.svg";

const ActionHero = () => {
  return (
    <div className={'w-full overflow-x-scroll'}>
      <div
        className={
          "h-[68px] sm:h-[96px] w-full flex justify-center items-center"
        }
      >
        <div
          className={
            "w-full max-w-[1140px] flex justify-center sm:justify-start items-center"
          }
        >
          <img
            src={ActionHeroImg}
            className={"w-[160px] h-10 sm:w-[241px] sm:h-[60px]"}
            alt={""}
          />
        </div>
      </div>
        <div className={"bg-[#484450] w-full h-[1px] opacity-[0.7]"}></div>
      <Section1 />
    </div>
  );
};
export default ActionHero;
