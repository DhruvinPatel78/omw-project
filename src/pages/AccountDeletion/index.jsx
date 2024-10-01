import Container from "../../components/Container";
import Footer from "../footer";
import Header from "../header";
import Step1 from "../../images/AccountDeletion/1.jpeg";
import Step2 from "../../images/AccountDeletion/2.jpeg";
import Step3 from "../../images/AccountDeletion/3.jpeg";
import Step4 from "../../images/AccountDeletion/4.jpeg";

const AccountDeletion = () => {
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
            Account Deletion process
          </span>
        </div>

        <div>
          <div
            className={
              "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]"
            }
          >
            Please follow below steps for delete account:-
          </div>
          <div
            className={
              "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]"
            }
          >
            Step 1:
          </div>
          <div>
            <img src={""} />
          </div>
        </div>

        <div>
          <div
            className={
              "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]"
            }
          >
            Please follow below steps for delete account:-
          </div>
          <div
            className={
              "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]  sm:py-[20px] py-[30px]"
            }
          >
            Step 1: Tap on user Profile
          </div>
          <div>
            <img src={Step1} width={250} />
          </div>
        </div>
        <div>
          <div
            className={
              "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]  sm:py-[20px] py-[30px]"
            }
          >
            Step 2: Scroll down
          </div>
          <div>
            <img src={Step2} width={250} />
          </div>
        </div>
        <div>
          <div
            className={
              "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]  sm:py-[20px] py-[30px]"
            }
          >
            Step 3: Click on delete my account on bottom right option
          </div>
          <div>
          <img src={Step3} width={250} />
          </div>
        </div>
        <div>
          <div
            className={
              "font-bold text-xs sm:text-base md:text-xl lg:text-[28px]  sm:py-[20px] py-[30px]"
            }
          >
            Step 4: Click on Yes to delete it
          </div>
          <div>
          <img src={Step4} width={250} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default AccountDeletion;
