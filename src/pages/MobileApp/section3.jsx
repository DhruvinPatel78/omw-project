import Container from "../../components/container";

const Section3 = ({ title, subTitle, list }) => {
  return (
    <Container className={"flex justify-center items-center py-10"}>
      <div className={"w-full flex flex-col sm:gap-10 gap-6"}>
        <div
          className={
            "font-extrabold text-2xl sm:text-3xl md:text-6xl lg:text-70 flex flex-wrap"
          }
        >
          <span>{title}</span>
          <span className={"text-primary"}>{subTitle}</span>
        </div>
        <div className={"flex flex-col"}>
          {list?.map((item, index) => {
            const lastItem = list[list?.length - 1];
            return (
              <div
                className={`flex flex-col md:flex-row sm:gap-8 gap-1 py-6 ${
                  item.id === lastItem.id ? "border-0" : "border-b"
                } border-secondary`}
                key={`item-${index}`}
              >
                <span
                  className={
                    "text-primary font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] min-w-[200px] sm:min-w-[200px] md:min-w-[290px] lg:min-w-[323px]"
                  }
                >
                  {item.title}:
                </span>
                <span
                  className={
                    "font-semibold text-sm sm:text-base md:text-xl lg:text-[28px]"
                  }
                >
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Section3;
