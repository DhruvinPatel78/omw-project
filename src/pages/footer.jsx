import Container from "../components/Container";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instragram.svg";
import Twitter from "../images/x.svg";
import Youtube from "../images/yutube.svg";
import LinkedIn from "../images/in.svg";
import Logo from "../images/omwLogo.svg";

const Footer = () => {
  const list = [
    {
      id: 1,
      icon: Facebook,
      title: "Facebook",
    },
    {
      id: 2,
      icon: Twitter,
      title: "Twitter",
    },
    {
      id: 3,
      icon: LinkedIn,
      title: "LinkedIn",
    },
    {
      id: 4,
      icon: Instagram,
      title: "Instagram",
    },
    {
      id: 5,
      icon: Youtube,
      title: "Youtube",
    },
  ];
  const resourceList = [
    {
      id: 1,
      title: "Press / Media Kit",
    },
    {
      id: 2,
      title: "Careers",
    },
    {
      id: 3,
      title: "OnMyWay Foundation 501(c)3",
    },
    {
      id: 4,
      title: "Support",
    },
  ];
  return (
    <div className={"w-full"}>
      <Container>
        <div className={"border-b border-secondary"}></div>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] place-items-center py-10 justify-center"
          }
        >
          <div className={"w-full h-full flex flex-col gap-[20px]"}>
            <span className={"sm:text-lg text-sm font-bold uppercase"}>
              STAY CONNECTED
            </span>
            <div className={"flex flex-col gap-2"}>
              {list?.map((item, index) => (
                <div className={"flex flex-row gap-4 items-center"} key={index}>
                  <img src={item.icon} alt={item.title} />
                  <span className={"sm:text-sm text-xs font-medium"}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={"w-full h-full flex flex-col gap-[20px]"}>
            <span className={"sm:text-lg text-sm font-bold uppercase"}>
              Business Solutions
            </span>
            <div className={"flex flex-row gap-4 items-center"}>
              <div className={"w-[10px] h-[10px] rounded-full bg-primary"} />
              <span className={"sm:text-sm text-xs font-medium"}>
                Businesses / Organizations / Schools
              </span>
            </div>
          </div>
          <div className={"w-full h-full flex flex-col gap-[20px]"}>
            <span className={"sm:text-lg text-sm font-bold uppercase"}>
              Business Solutions
            </span>
            <div className={"flex flex-col gap-2"}>
              {resourceList?.map((item, index) => (
                <div className={"flex flex-row gap-4 items-center"} key={index}>
                  <div
                    className={"w-[10px] h-[10px] rounded-full bg-primary"}
                  />
                  <span className={"sm:text-sm text-xs font-medium"}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={"w-full h-full flex flex-col gap-[20px] items-start"}>
            <img src={Logo} alt="Logo" className={"h-[30px]"} />
            <div className={"flex flex-col sm:gap-[10px] gap-[7px]"}>
              <span className={"font-bold sm:text-sm text-xs"}>
                OnMyWay Headquarters
              </span>
              <span
                className={"sm:w-[150px] w-full sm:text-sm text-xs font-medium"}
              >
                174 Meeting Street Suite 300-1061 Charleston, SC 29401
              </span>
            </div>
            <div className={"flex flex-row gap-4 items-center"}>
              <div className={"w-[10px] h-[10px] rounded-full bg-primary"} />
              <span className={"sm:text-sm text-xs font-medium"}>
                Contact OnMyWay
              </span>
            </div>
          </div>
        </div>
      </Container>
      <div className={"border-b border-secondary"}></div>
      <Container className={"text-center p-6 px-4"}>
        <span
          className={
            " flex sm:flex-row flex-col justify-center sm:text-xs text-[10px] font-medium text-[#B0B0C1]"
          }
        >
          © OnMyWay 2024. All Rights Reserved{" "}
          <span className={"text-[#EFF2FF]"}>
            | Terms of Use | Privacy Policy
          </span>
        </span>
      </Container>
    </div>
  );
};
export default Footer;
