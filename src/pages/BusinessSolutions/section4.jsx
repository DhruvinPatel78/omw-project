import Container from "../../components/container";
import Iphone from "../../images/BusinsessSolution/bIphone.png";
const voiceList = [
  {
    id: 1,
    title: "Personalized AI Assistant",
    description:
      "Archie can send text messages, make phone calls, check flights, search the web, manage schedules, set reminders, and provide turn-by-turn navigation—all through voice commands.",
  },
  {
    id: 2,
    title: "Real-Time Updates and Management",
    description:
      "Archie can automatically text clients and colleagues with real-time updates, manage inventory and assets, and handle temporary employee directives and checklists.",
  },
  {
    id: 3,
    title: "Convenient Services",
    description:
      "From booking hotel rooms and flights to scheduling restaurant reservations and hair appointments, Archie covers it all.",
  },
  {
    id: 4,
    title: "Enhanced Productivity",
    description:
      "Employees can ask any question on any topic, manage in-app actions and answers, and access all requested information from their phone or computer once they reach their destination.",
  },
  {
    id: 5,
    title: "Safety and Compliance",
    description:
      "Implementing OnMyWay ensures compliance with safety regulations, protecting both your employees and your company's interests.",
  },
];
const Section4 = () => {
  return (
    <Container className={"flex flex-col gap-4"}>
      <span
        className={
          "text-3xl sm:text-4lx md:text-5xl lg:text-6xl font-extrabold text-primary"
        }
      >
        Archie Voice AI,{" "}
        <span className="bg-millionText bg-clip-text text-transparent">
          {" "}
          Simply The Best.
        </span>
      </span>
      <div
        className={"w-full flex flex-col lg:flex-row gap-10 justify-center "}
      >
        <div
          className={
            "w-full lg:w-2/5 h-full lg:h-screen bg-no-repeat bg-center flex items-end justify-center bg-contain min-h-[500px]"
          }
          style={{ backgroundImage: `url(${Iphone})` }}
        ></div>
        <div
          className={
            "w-full lg:w-3/5 h-full lg:h-screen flex flex-col gap-4 justify-center md:text-left text-center"
          }
        >
          {voiceList?.map((item, index) => {
            return (
              <div
                className={
                  "font-semibold text-base sm:text-lg md:text-xl lg:text-[22px] flex flex-col max-w-[650px]"
                }
                key={`voice-${index}`}
              >
                <span
                  className={
                    "text-primary text-base sm:text-lg md:text-xl lg:text-2xl"
                  }
                >
                  {item.title}:
                </span>
                <span>{item?.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Section4;
