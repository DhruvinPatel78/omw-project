import Layout from "../layout";
import Section8 from "../BusinessSolutions/section8";
import SendInvoice from "../BusinessSolutions/SendInvoice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("calculatedData")) {
      setData(JSON.parse(localStorage.getItem("calculatedData")));
    } else {
      navigate("/business#price");
    }
  }, []);

  return (
    <Layout>
      <div className={"flex flex-col gap-4"}>
        <Section8 data={data} />
        <SendInvoice data={data} />
      </div>
    </Layout>
  );
};

export default PricingPage;
