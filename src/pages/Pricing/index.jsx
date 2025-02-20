import Layout from "../layout";
import Section8 from "../BusinessSolutions/section8";
import SendInvoice from "../BusinessSolutions/SendInvoice";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const PricingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    let pathName = location.pathname.split("/");
    if (pathName[2]) {
      axios
        .get(
          `https://prod-api.onmyway.com/omw/get_bussiness_price_detail/${pathName[2]}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          let data = res?.data?.data;
          console.log(data);
          setData({
            companyEmail: data?.company_email,
            companyName: data?.company_name,
            name: data?.name,
            phoneNumber: data?.phone_number,
            term: data?.term,
            amount: +data?.amount,
            employees: +data?.employees,
          });
        })
        .catch((e) => navigate("/business#price"));
    } else {
      if (localStorage.getItem("calculatedData")) {
        setData(JSON.parse(localStorage.getItem("calculatedData")));
      } else {
        navigate("/business#price");
      }
    }
  }, []);

  return (
    <Layout>
      <div className={"flex flex-col gap-4"}>
        <Section8 data={data} />
        <SendInvoice reviewData={data} />
      </div>
    </Layout>
  );
};

export default PricingPage;
