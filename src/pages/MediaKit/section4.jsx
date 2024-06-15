import Container from "../../components/Container";
import CardWithBorder from "../../components/CardWithBorder";
import { socialMediaDummyList } from "../constant";

const Section4 = () => {
  return (
    <Container>
      <CardWithBorder
        className={
          "sm:p-[104px] px-4 py-[34px] flex flex-col sm:gap-[57px] gap-[31px] items-center justify-center"
        }
      >
        <span
          className={
            "font-extrabold text-[28px] sm:text-5xl md:text-6xl lg:text-70 text-primary"
          }
        >
          Media <span className={"text-white"}>Inquiries</span>
        </span>
        <div className={"flex flex-col gap-[4px] items-center"}>
          <span
            className={
              "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center capitalize"
            }
          >
            Can't Find What You Need? Contact Us At
          </span>
          <span className="bg-cardBorder bg-clip-text text-transparent text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Press@Onmyway.Com
          </span>
        </div>
        <div className={"flex flex-row sm:gap-[49px] gap-[23px]"}>
          {socialMediaDummyList?.map((media) => (
            <img src={media.icon} alt={media.name} key={`${media.title}-${media.id}`} />
          ))}
        </div>
      </CardWithBorder>
    </Container>
  );
};
export default Section4;
