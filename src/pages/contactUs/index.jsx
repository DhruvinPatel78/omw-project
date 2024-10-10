import Container from "../../components/Container";
import Footer from "../footer";
import Header from "../header";

const contactUs = () => {
    return (
        <div>
          <Header />
          <Container
            className={"flex flex-col sm:gap-10 gap-[10px] sm:py-[70px] py-[30px]"}
          >
            <div
              className={
                "flex flex-col justify-center items-center sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[890px] text-center"
                }
              >
                OMW MOBILE SECURITY, INC.
              </span>
            </div>
            <div class="h1-custom">
              <div
                className={
                  "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]"
                }
              >
               Please contact support at <a className="text-primary" href="mailto:support@onmyway.com">support@onmyway.com</a>
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      );
};
export default contactUs;
