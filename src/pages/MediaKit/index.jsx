import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const MediaKit = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <Section1 />
      <div className={"max-w-1200 w-full mx-auto"}>
        <div className={"border-b border-secondary border-dashed "} />
      </div>
      <Section2 />
      <Section3 />
    </div>
  );
};
export default MediaKit;
