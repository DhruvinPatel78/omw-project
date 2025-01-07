import Container from "../../components/Container";
import Section4BG from "../../images/MobileAPP/section4BG.png";
import CardWithBorder from "../../components/CardWithBorder";
import { useEffect, useState } from "react";
import axios from "axios";
const Section4 = () => {
  const [metricData, setMetricData] = useState(null);

  const getMatrixData = async () => {
    await axios
      .get(
        "https://whispering-citadel-11540-0a9768b9a869.herokuapp.com/http://prod-api.onmyway.com/omw/get_metric_data",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => setMetricData(res?.data?.data))
      .catch((e) => console.log("error", e));
  };

  useEffect(() => {
    getMatrixData();
  }, []);

  return (
    <div
      className={
        "h-full w-full bg-no-repeat bg-left flex justify-center items-center"
      }
      style={{ backgroundImage: `url(${Section4BG})` }}
    >
      <Container className="flex items-center justify-center">
        <CardWithBorder
          className={
            "sm:py-[90px] py-[20px] px-4 flex flex-col sm:gap-[50px] gap-[18px] justify-center items-center"
          }
        >
          <span className={"font-bold sm:text-xl md:text-2xl lg:text-[26px]"}>
            So Far…
          </span>
          <div
            className={
              "font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center"
            }
          >
            <span className="bg-cardBorder bg-clip-text text-transparent">
              {metricData?.lives_saved || 0}{" "}
            </span>
            <span className="bg-millionText bg-clip-text text-transparent">
              Lives Saved
            </span>
          </div>
          <span className={"font-bold sm:text-xl md:text-2xl lg:text-[26px]"}>
            Millions Of Active Users And Growing
          </span>
        </CardWithBorder>
      </Container>
    </div>
  );
};
export default Section4;
