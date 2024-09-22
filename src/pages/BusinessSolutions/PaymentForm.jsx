import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { IoCloseOutline } from "react-icons/io5";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/complete`,
      },
    });

    if (error) {
      setMessage(error.message);
    }

    setIsProcessing(false);
  };
  return (
    <div
      className={
        "fixed w-screen h-screen z-10 top-0 left-0 overflow-y-scroll bg-[#00000099] flex justify-center items-center"
      }
    >
      <div
        className={
          "bg-[#FFFFFF] rounded-[30px] shadow-[0px_4px_64px_0px_#021426] p-4 sm:p-9 w-full max-w-[600px] flex flex-col justify-center items-center"
        }
      >
        <form id={"PaymentForm"} onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            disabled={isProcessing}
            id={"submit"}
            className={
              "w-full bg-primary p-4 py-5 text-lg  lg:text-[22px] sm:rounded-[12px] rounded-[4px] mt-5"
            }
          >
            {isProcessing ? "Processing..." : "Pay"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
