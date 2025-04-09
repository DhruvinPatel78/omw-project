import Layout from "../layout";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container";

const TermAndCondition = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  return (
    <Layout>
      <Container className={"flex flex-col gap-4"}>
        <div
          className={
            "flex flex-col justify-center items-center sm:gap-[24px] gap-[10px] h-full"
          }
        >
          <span
            className={
              "font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[890px] text-center bg-cardBorder bg-clip-text text-transparent"
            }
          >
            Terms and Conditions
          </span>
        </div>
        {pathname === "100_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $100 Terms and Conditions
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a $100 Hotel Savings Card code
                that gets you access to a private, non public, wholesale travel
                site booking engine that offers steep discounts on hotel
                bookings at over one million properties around the world that
                other popular public travel sites do not have access to. You
                will receive one $100 hotel savings card codes. Your hotel
                savings card can be used to save up to 50% off on hotel bookings
                when compared side by side to other popular public travel sites.
                There are no black out dates. Once you redeem your certificate
                you will have 12 months to use the hotel savings card code. You
                must redeem this certificate before it expires in order to get
                your activated hotel savings card code to use on the private
                wholesale travel site booking engine. Search 1,000,000
                properties around the world. Savings are displayed with each
                search result so you will know how steep the discount is before
                you choose a property. Results with the greatest savings are
                displayed first. Place your reservation and the amount that you
                save will be deducted from your Savings Bank Balance.
                <br /> <br />
                The hotel savings program is flexible and permits you to use
                your entire Savings Bank Balance on a single or multiple
                reservations until your Savings Bank Balance is empty. The
                amount that you may apply to each reservation is determined by
                the parameters of your search and the savings available through
                the hotels and resorts that you choose. You may add multiple
                codes to your account for additional savings and a larger
                savings bank. There is no minimum stay required. You can stay
                for a minimum of 1 night or the maximum nights allowed for that
                hotel. Reservations booked on the website cannot be changed or
                modified once booked, but may be cancelled per the terms and
                conditions. Cancellation policies will vary depending on the
                hotel or resort you selected. Cancelled reservations may incur a
                cancellation fee. A non-activated savings code is fully
                transferable. Once activated, a savings code cannot be
                transferred and personal information cannot be changed. The
                person activating the savings code must be the person traveling
                or using the service. This certificate cannot be combined with
                any other promotional vacation offer. The expiration date on
                this certificate pertains only to activation of this certificate
                and not actual travel. Travel must be completed within 12 months
                of activation. <br />
                <br />
                This certificate has no cash surrender value. Void if
                discontinued and where prohibited by law. The terms of this
                offer are subject to change without notice. Do not make travel
                arrangements until you receive a written booking confirmation
                number. This certificate will be considered void if manipulated
                in any way or altered in any unauthorized manner. All
                promotional inventory is based strictly on availability. By
                participating in this promotional offer you release all
                distributors, 3rd party administrators, fulfilling travel
                agencies of liability of any actual or potential loss that may
                arise in connection with this offer. Each traveler is
                responsible for all necessary travel documents for each country
                they visit. Any fees to redeem or activate this offer are non
                refundable, if applicable. Do not rely upon representations
                other than what is printed on this certificate. How can we offer
                such steep savings on hotels that the public travel websites
                like Expedia, etc. cannot? Basically your customers get access
                to a Special Non Public Travel Site that they need to login with
                a username and password in order to book a trip.
                <br />
                <br /> The reason why our private travel site is so heavily
                discounted when you compare side by side with sites like Expedia
                and Orbitz is because all public travel sites are regulated on
                how much they can charge for a room and this is why when you are
                searching different public travel sites, all the prices are very
                close in comparison, by a % or two. They all have a specific
                range that they can price the different hotels to keep the
                industry competitive. Since our travel site is private and not
                available to the general public, the only way someone can access
                it is with a valid hotel savings code and this is why we do not
                have to follow the same rules or regulations when it comes to
                how much we can charge or how low we can charge. Our travel site
                also waives all commissions that would normally be earned by
                public travel sites (this is how they make money and commissions
                earned are up to 50%!, now you understand why they are so rich?)
                and this is a big reason why if your customers books on our non
                public, non regulated travel site using their travel dollars
                they could save up to 50% off when compared side by side to the
                public travel sites. The certificates are not gift cards. They
                are actually savings cards. <br />
                <br />
                The difference between our Hotel Savings Card vs. an actual gift
                card is that while both offer cash value, a savings card offers
                savings on purchases, but does not automatically offer the
                chance to use the full cash value at one time the way a gift
                card would. The savings is based on PUBLIC PRICE VS SAVINGS
                PRICE. The amount of savings depends on each individual hotel,
                room size, dates of travel, length of stay and many other
                factors. The savings can range UP TO 50% off normal public
                pricing when compared to travel sites such as www.expedia.com or
                even www.orbitz.com To illustrate: Say an end user redeems a
                $200 Hotel Savings Card. They are then given $200 in savings to
                use on booking a hotel or resort. Let’s say the customer selects
                a 2-night hotel stay and the total cost for the stay is $200
                PUBLIC PRICE. Would the end user automatically be able to use
                the full $200 on that hotel stay, and get the hotel stay for
                only $0? No, never. This is the case if the end user had a "Gift
                Card". It would not be far-fetched, however, to be able to save
                $100 on that $325 booking, making it $225. Also (and this is
                very important), it is very common to save hundreds of dollars
                even thousands of dollars on more luxury lengthier stays. To
                give an example of what we mean: Let’s say an end user redeems
                the $500 Hotel Savings Certificate. They then search inventory
                and find a 7 Night Resort stay at a luxury resort, with a total
                cost for the 7 Nights at $2500 PUBLIC PRICE. Would the end user
                likely be able to use the full $500 credit to that $2,500 cost,
                making the end cost $2,000? Yes. This is likely. But again, the
                amount of savings depends on each individual hotel, room size,
                dates of travel, length of stay and many other factors. You must
                be able to speak, read, type and fully understand the English
                language. If you cannot speak, read and understand the English
                language, then your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "200_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $200 Terms and Conditions
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a $200 Hotel Savings Card code
                that gets you access to a private, non public, wholesale travel
                site booking engine that offers steep discounts on hotel
                bookings at over one million properties around the world that
                other popular public travel sites do not have access to. You
                will receive one $200 hotel savings card codes. Your hotel
                savings card can be used to save up to 50% off on hotel bookings
                when compared side by side to other popular public travel sites.
                There are no black out dates. Once you redeem your certificate
                you will have 12 months to use the hotel savings card code. You
                must redeem this certificate before it expires in order to get
                your activated hotel savings card code to use on the private
                wholesale travel site booking engine. Search 1,000,000
                properties around the world. Savings are displayed with each
                search result so you will know how steep the discount is before
                you choose a property. Results with the greatest savings are
                displayed first. Place your reservation and the amount that you
                save will be deducted from your Savings Bank Balance.
                <br /> <br />
                The hotel savings program is flexible and permits you to use
                your entire Savings Bank Balance on a single or multiple
                reservations until your Savings Bank Balance is empty. The
                amount that you may apply to each reservation is determined by
                the parameters of your search and the savings available through
                the hotels and resorts that you choose. You may add multiple
                codes to your account for additional savings and a larger
                savings bank. There is no minimum stay required. You can stay
                for a minimum of 1 night or the maximum nights allowed for that
                hotel. Reservations booked on the website cannot be changed or
                modified once booked, but may be cancelled per the terms and
                conditions. Cancellation policies will vary depending on the
                hotel or resort you selected. Cancelled reservations may incur a
                cancellation fee. A non-activated savings code is fully
                transferable. Once activated, a savings code cannot be
                transferred and personal information cannot be changed. The
                person activating the savings code must be the person traveling
                or using the service. This certificate cannot be combined with
                any other promotional vacation offer. The expiration date on
                this certificate pertains only to activation of this certificate
                and not actual travel. Travel must be completed within 12 months
                of activation. <br />
                <br />
                This certificate has no cash surrender value. Void if
                discontinued and where prohibited by law. The terms of this
                offer are subject to change without notice. Do not make travel
                arrangements until you receive a written booking confirmation
                number. This certificate will be considered void if manipulated
                in any way or altered in any unauthorized manner. All
                promotional inventory is based strictly on availability. By
                participating in this promotional offer you release all
                distributors, 3rd party administrators, fulfilling travel
                agencies of liability of any actual or potential loss that may
                arise in connection with this offer. Each traveler is
                responsible for all necessary travel documents for each country
                they visit. Any fees to redeem or activate this offer are non
                refundable, if applicable. Do not rely upon representations
                other than what is printed on this certificate. How can we offer
                such steep savings on hotels that the public travel websites
                like Expedia, etc. cannot? Basically your customers get access
                to a Special Non Public Travel Site that they need to login with
                a username and password in order to book a trip.
                <br />
                <br /> The reason why our private travel site is so heavily
                discounted when you compare side by side with sites like Expedia
                and Orbitz is because all public travel sites are regulated on
                how much they can charge for a room and this is why when you are
                searching different public travel sites, all the prices are very
                close in comparison, by a % or two. They all have a specific
                range that they can price the different hotels to keep the
                industry competitive. Since our travel site is private and not
                available to the general public, the only way someone can access
                it is with a valid hotel savings code and this is why we do not
                have to follow the same rules or regulations when it comes to
                how much we can charge or how low we can charge. Our travel site
                also waives all commissions that would normally be earned by
                public travel sites (this is how they make money and commissions
                earned are up to 50%!, now you understand why they are so rich?)
                and this is a big reason why if your customers books on our non
                public, non regulated travel site using their travel dollars
                they could save up to 50% off when compared side by side to the
                public travel sites. The certificates are not gift cards. They
                are actually savings cards. <br />
                <br />
                The difference between our Hotel Savings Card vs. an actual gift
                card is that while both offer cash value, a savings card offers
                savings on purchases, but does not automatically offer the
                chance to use the full cash value at one time the way a gift
                card would. The savings is based on PUBLIC PRICE VS SAVINGS
                PRICE. The amount of savings depends on each individual hotel,
                room size, dates of travel, length of stay and many other
                factors. The savings can range UP TO 50% off normal public
                pricing when compared to travel sites such as www.expedia.com or
                even www.orbitz.com To illustrate: Say an end user redeems a
                $200 Hotel Savings Card. They are then given $200 in savings to
                use on booking a hotel or resort. Let’s say the customer selects
                a 2-night hotel stay and the total cost for the stay is $200
                PUBLIC PRICE. Would the end user automatically be able to use
                the full $200 on that hotel stay, and get the hotel stay for
                only $0? No, never. This is the case if the end user had a "Gift
                Card". It would not be far-fetched, however, to be able to save
                $100 on that $325 booking, making it $225. Also (and this is
                very important), it is very common to save hundreds of dollars
                even thousands of dollars on more luxury lengthier stays. To
                give an example of what we mean: Let’s say an end user redeems
                the $500 Hotel Savings Certificate. They then search inventory
                and find a 7 Night Resort stay at a luxury resort, with a total
                cost for the 7 Nights at $2500 PUBLIC PRICE. Would the end user
                likely be able to use the full $500 credit to that $2,500 cost,
                making the end cost $2,000? Yes. This is likely. But again, the
                amount of savings depends on each individual hotel, room size,
                dates of travel, length of stay and many other factors. You must
                be able to speak, read, type and fully understand the English
                language. If you cannot speak, read and understand the English
                language, then your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "300_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $300 Terms and Conditions
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a $300 Hotel Savings Card code
                that gets you access to a private, non public, wholesale travel
                site booking engine that offers steep discounts on hotel
                bookings at over one million properties around the world that
                other popular public travel sites do not have access to. You
                will receive one $300 hotel savings card codes. Your hotel
                savings card can be used to save up to 50% off on hotel bookings
                when compared side by side to other popular public travel sites.
                There are no black out dates. Once you redeem your certificate
                you will have 12 months to use the hotel savings card code. You
                must redeem this certificate before it expires in order to get
                your activated hotel savings card code to use on the private
                wholesale travel site booking engine. Search 1,000,000
                properties around the world. Savings are displayed with each
                search result so you will know how steep the discount is before
                you choose a property. Results with the greatest savings are
                displayed first. Place your reservation and the amount that you
                save will be deducted from your Savings Bank Balance.
                <br /> <br />
                The hotel savings program is flexible and permits you to use
                your entire Savings Bank Balance on a single or multiple
                reservations until your Savings Bank Balance is empty. The
                amount that you may apply to each reservation is determined by
                the parameters of your search and the savings available through
                the hotels and resorts that you choose. You may add multiple
                codes to your account for additional savings and a larger
                savings bank. There is no minimum stay required. You can stay
                for a minimum of 1 night or the maximum nights allowed for that
                hotel. Reservations booked on the website cannot be changed or
                modified once booked, but may be cancelled per the terms and
                conditions. Cancellation policies will vary depending on the
                hotel or resort you selected. Cancelled reservations may incur a
                cancellation fee. A non-activated savings code is fully
                transferable. Once activated, a savings code cannot be
                transferred and personal information cannot be changed. The
                person activating the savings code must be the person traveling
                or using the service. This certificate cannot be combined with
                any other promotional vacation offer. The expiration date on
                this certificate pertains only to activation of this certificate
                and not actual travel. Travel must be completed within 12 months
                of activation. <br />
                <br />
                This certificate has no cash surrender value. Void if
                discontinued and where prohibited by law. The terms of this
                offer are subject to change without notice. Do not make travel
                arrangements until you receive a written booking confirmation
                number. This certificate will be considered void if manipulated
                in any way or altered in any unauthorized manner. All
                promotional inventory is based strictly on availability. By
                participating in this promotional offer you release all
                distributors, 3rd party administrators, fulfilling travel
                agencies of liability of any actual or potential loss that may
                arise in connection with this offer. Each traveler is
                responsible for all necessary travel documents for each country
                they visit. Any fees to redeem or activate this offer are non
                refundable, if applicable. Do not rely upon representations
                other than what is printed on this certificate. How can we offer
                such steep savings on hotels that the public travel websites
                like Expedia, etc. cannot? Basically your customers get access
                to a Special Non Public Travel Site that they need to login with
                a username and password in order to book a trip.
                <br />
                <br /> The reason why our private travel site is so heavily
                discounted when you compare side by side with sites like Expedia
                and Orbitz is because all public travel sites are regulated on
                how much they can charge for a room and this is why when you are
                searching different public travel sites, all the prices are very
                close in comparison, by a % or two. They all have a specific
                range that they can price the different hotels to keep the
                industry competitive. Since our travel site is private and not
                available to the general public, the only way someone can access
                it is with a valid hotel savings code and this is why we do not
                have to follow the same rules or regulations when it comes to
                how much we can charge or how low we can charge. Our travel site
                also waives all commissions that would normally be earned by
                public travel sites (this is how they make money and commissions
                earned are up to 50%!, now you understand why they are so rich?)
                and this is a big reason why if your customers books on our non
                public, non regulated travel site using their travel dollars
                they could save up to 50% off when compared side by side to the
                public travel sites. The certificates are not gift cards. They
                are actually savings cards. <br />
                <br />
                The difference between our Hotel Savings Card vs. an actual gift
                card is that while both offer cash value, a savings card offers
                savings on purchases, but does not automatically offer the
                chance to use the full cash value at one time the way a gift
                card would. The savings is based on PUBLIC PRICE VS SAVINGS
                PRICE. The amount of savings depends on each individual hotel,
                room size, dates of travel, length of stay and many other
                factors. The savings can range UP TO 50% off normal public
                pricing when compared to travel sites such as www.expedia.com or
                even www.orbitz.com To illustrate: Say an end user redeems a
                $200 Hotel Savings Card. They are then given $200 in savings to
                use on booking a hotel or resort. Let’s say the customer selects
                a 2-night hotel stay and the total cost for the stay is $200
                PUBLIC PRICE. Would the end user automatically be able to use
                the full $200 on that hotel stay, and get the hotel stay for
                only $0? No, never. This is the case if the end user had a "Gift
                Card". It would not be far-fetched, however, to be able to save
                $100 on that $325 booking, making it $225. Also (and this is
                very important), it is very common to save hundreds of dollars
                even thousands of dollars on more luxury lengthier stays. To
                give an example of what we mean: Let’s say an end user redeems
                the $500 Hotel Savings Certificate. They then search inventory
                and find a 7 Night Resort stay at a luxury resort, with a total
                cost for the 7 Nights at $2500 PUBLIC PRICE. Would the end user
                likely be able to use the full $500 credit to that $2,500 cost,
                making the end cost $2,000? Yes. This is likely. But again, the
                amount of savings depends on each individual hotel, room size,
                dates of travel, length of stay and many other factors. You must
                be able to speak, read, type and fully understand the English
                language. If you cannot speak, read and understand the English
                language, then your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "400_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $400 Terms and Conditions
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a $400 Hotel Savings Card code
                that gets you access to a private, non public, wholesale travel
                site booking engine that offers steep discounts on hotel
                bookings at over one million properties around the world that
                other popular public travel sites do not have access to. You
                will receive one $400 hotel savings card codes. Your hotel
                savings card can be used to save up to 50% off on hotel bookings
                when compared side by side to other popular public travel sites.
                There are no black out dates. Once you redeem your certificate
                you will have 12 months to use the hotel savings card code. You
                must redeem this certificate before it expires in order to get
                your activated hotel savings card code to use on the private
                wholesale travel site booking engine. Search 1,000,000
                properties around the world. Savings are displayed with each
                search result so you will know how steep the discount is before
                you choose a property. Results with the greatest savings are
                displayed first. Place your reservation and the amount that you
                save will be deducted from your Savings Bank Balance.
                <br /> <br />
                The hotel savings program is flexible and permits you to use
                your entire Savings Bank Balance on a single or multiple
                reservations until your Savings Bank Balance is empty. The
                amount that you may apply to each reservation is determined by
                the parameters of your search and the savings available through
                the hotels and resorts that you choose. You may add multiple
                codes to your account for additional savings and a larger
                savings bank. There is no minimum stay required. You can stay
                for a minimum of 1 night or the maximum nights allowed for that
                hotel. Reservations booked on the website cannot be changed or
                modified once booked, but may be cancelled per the terms and
                conditions. Cancellation policies will vary depending on the
                hotel or resort you selected. Cancelled reservations may incur a
                cancellation fee. A non-activated savings code is fully
                transferable. Once activated, a savings code cannot be
                transferred and personal information cannot be changed. The
                person activating the savings code must be the person traveling
                or using the service. This certificate cannot be combined with
                any other promotional vacation offer. The expiration date on
                this certificate pertains only to activation of this certificate
                and not actual travel. Travel must be completed within 12 months
                of activation. <br />
                <br />
                This certificate has no cash surrender value. Void if
                discontinued and where prohibited by law. The terms of this
                offer are subject to change without notice. Do not make travel
                arrangements until you receive a written booking confirmation
                number. This certificate will be considered void if manipulated
                in any way or altered in any unauthorized manner. All
                promotional inventory is based strictly on availability. By
                participating in this promotional offer you release all
                distributors, 3rd party administrators, fulfilling travel
                agencies of liability of any actual or potential loss that may
                arise in connection with this offer. Each traveler is
                responsible for all necessary travel documents for each country
                they visit. Any fees to redeem or activate this offer are non
                refundable, if applicable. Do not rely upon representations
                other than what is printed on this certificate. How can we offer
                such steep savings on hotels that the public travel websites
                like Expedia, etc. cannot? Basically your customers get access
                to a Special Non Public Travel Site that they need to login with
                a username and password in order to book a trip.
                <br />
                <br /> The reason why our private travel site is so heavily
                discounted when you compare side by side with sites like Expedia
                and Orbitz is because all public travel sites are regulated on
                how much they can charge for a room and this is why when you are
                searching different public travel sites, all the prices are very
                close in comparison, by a % or two. They all have a specific
                range that they can price the different hotels to keep the
                industry competitive. Since our travel site is private and not
                available to the general public, the only way someone can access
                it is with a valid hotel savings code and this is why we do not
                have to follow the same rules or regulations when it comes to
                how much we can charge or how low we can charge. Our travel site
                also waives all commissions that would normally be earned by
                public travel sites (this is how they make money and commissions
                earned are up to 50%!, now you understand why they are so rich?)
                and this is a big reason why if your customers books on our non
                public, non regulated travel site using their travel dollars
                they could save up to 50% off when compared side by side to the
                public travel sites. The certificates are not gift cards. They
                are actually savings cards. <br />
                <br />
                The difference between our Hotel Savings Card vs. an actual gift
                card is that while both offer cash value, a savings card offers
                savings on purchases, but does not automatically offer the
                chance to use the full cash value at one time the way a gift
                card would. The savings is based on PUBLIC PRICE VS SAVINGS
                PRICE. The amount of savings depends on each individual hotel,
                room size, dates of travel, length of stay and many other
                factors. The savings can range UP TO 50% off normal public
                pricing when compared to travel sites such as www.expedia.com or
                even www.orbitz.com To illustrate: Say an end user redeems a
                $200 Hotel Savings Card. They are then given $200 in savings to
                use on booking a hotel or resort. Let’s say the customer selects
                a 2-night hotel stay and the total cost for the stay is $200
                PUBLIC PRICE. Would the end user automatically be able to use
                the full $200 on that hotel stay, and get the hotel stay for
                only $0? No, never. This is the case if the end user had a "Gift
                Card". It would not be far-fetched, however, to be able to save
                $100 on that $325 booking, making it $225. Also (and this is
                very important), it is very common to save hundreds of dollars
                even thousands of dollars on more luxury lengthier stays. To
                give an example of what we mean: Let’s say an end user redeems
                the $500 Hotel Savings Certificate. They then search inventory
                and find a 7 Night Resort stay at a luxury resort, with a total
                cost for the 7 Nights at $2500 PUBLIC PRICE. Would the end user
                likely be able to use the full $500 credit to that $2,500 cost,
                making the end cost $2,000? Yes. This is likely. But again, the
                amount of savings depends on each individual hotel, room size,
                dates of travel, length of stay and many other factors. You must
                be able to speak, read, type and fully understand the English
                language. If you cannot speak, read and understand the English
                language, then your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "500_hotel_gift_card" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                $500 Terms and Conditions
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a $500 Hotel Savings Card code
                that gets you access to a private, non public, wholesale travel
                site booking engine that offers steep discounts on hotel
                bookings at over one million properties around the world that
                other popular public travel sites do not have access to. You
                will receive one $500 hotel savings card codes. Your hotel
                savings card can be used to save up to 50% off on hotel bookings
                when compared side by side to other popular public travel sites.
                There are no black out dates. Once you redeem your certificate
                you will have 12 months to use the hotel savings card code. You
                must redeem this certificate before it expires in order to get
                your activated hotel savings card code to use on the private
                wholesale travel site booking engine. Search 1,000,000
                properties around the world. Savings are displayed with each
                search result so you will know how steep the discount is before
                you choose a property. Results with the greatest savings are
                displayed first. Place your reservation and the amount that you
                save will be deducted from your Savings Bank Balance.
                <br /> <br />
                The hotel savings program is flexible and permits you to use
                your entire Savings Bank Balance on a single or multiple
                reservations until your Savings Bank Balance is empty. The
                amount that you may apply to each reservation is determined by
                the parameters of your search and the savings available through
                the hotels and resorts that you choose. You may add multiple
                codes to your account for additional savings and a larger
                savings bank. There is no minimum stay required. You can stay
                for a minimum of 1 night or the maximum nights allowed for that
                hotel. Reservations booked on the website cannot be changed or
                modified once booked, but may be cancelled per the terms and
                conditions. Cancellation policies will vary depending on the
                hotel or resort you selected. Cancelled reservations may incur a
                cancellation fee. A non-activated savings code is fully
                transferable. Once activated, a savings code cannot be
                transferred and personal information cannot be changed. The
                person activating the savings code must be the person traveling
                or using the service. This certificate cannot be combined with
                any other promotional vacation offer. The expiration date on
                this certificate pertains only to activation of this certificate
                and not actual travel. Travel must be completed within 12 months
                of activation. <br />
                <br />
                This certificate has no cash surrender value. Void if
                discontinued and where prohibited by law. The terms of this
                offer are subject to change without notice. Do not make travel
                arrangements until you receive a written booking confirmation
                number. This certificate will be considered void if manipulated
                in any way or altered in any unauthorized manner. All
                promotional inventory is based strictly on availability. By
                participating in this promotional offer you release all
                distributors, 3rd party administrators, fulfilling travel
                agencies of liability of any actual or potential loss that may
                arise in connection with this offer. Each traveler is
                responsible for all necessary travel documents for each country
                they visit. Any fees to redeem or activate this offer are non
                refundable, if applicable. Do not rely upon representations
                other than what is printed on this certificate. How can we offer
                such steep savings on hotels that the public travel websites
                like Expedia, etc. cannot? Basically your customers get access
                to a Special Non Public Travel Site that they need to login with
                a username and password in order to book a trip.
                <br />
                <br /> The reason why our private travel site is so heavily
                discounted when you compare side by side with sites like Expedia
                and Orbitz is because all public travel sites are regulated on
                how much they can charge for a room and this is why when you are
                searching different public travel sites, all the prices are very
                close in comparison, by a % or two. They all have a specific
                range that they can price the different hotels to keep the
                industry competitive. Since our travel site is private and not
                available to the general public, the only way someone can access
                it is with a valid hotel savings code and this is why we do not
                have to follow the same rules or regulations when it comes to
                how much we can charge or how low we can charge. Our travel site
                also waives all commissions that would normally be earned by
                public travel sites (this is how they make money and commissions
                earned are up to 50%!, now you understand why they are so rich?)
                and this is a big reason why if your customers books on our non
                public, non regulated travel site using their travel dollars
                they could save up to 50% off when compared side by side to the
                public travel sites. The certificates are not gift cards. They
                are actually savings cards. <br />
                <br />
                The difference between our Hotel Savings Card vs. an actual gift
                card is that while both offer cash value, a savings card offers
                savings on purchases, but does not automatically offer the
                chance to use the full cash value at one time the way a gift
                card would. The savings is based on PUBLIC PRICE VS SAVINGS
                PRICE. The amount of savings depends on each individual hotel,
                room size, dates of travel, length of stay and many other
                factors. The savings can range UP TO 50% off normal public
                pricing when compared to travel sites such as www.expedia.com or
                even www.orbitz.com To illustrate: Say an end user redeems a
                $200 Hotel Savings Card. They are then given $200 in savings to
                use on booking a hotel or resort. Let’s say the customer selects
                a 2-night hotel stay and the total cost for the stay is $200
                PUBLIC PRICE. Would the end user automatically be able to use
                the full $200 on that hotel stay, and get the hotel stay for
                only $0? No, never. This is the case if the end user had a "Gift
                Card". It would not be far-fetched, however, to be able to save
                $100 on that $325 booking, making it $225. Also (and this is
                very important), it is very common to save hundreds of dollars
                even thousands of dollars on more luxury lengthier stays. To
                give an example of what we mean: Let’s say an end user redeems
                the $500 Hotel Savings Certificate. They then search inventory
                and find a 7 Night Resort stay at a luxury resort, with a total
                cost for the 7 Nights at $2500 PUBLIC PRICE. Would the end user
                likely be able to use the full $500 credit to that $2,500 cost,
                making the end cost $2,000? Yes. This is likely. But again, the
                amount of savings depends on each individual hotel, room size,
                dates of travel, length of stay and many other factors. You must
                be able to speak, read, type and fully understand the English
                language. If you cannot speak, read and understand the English
                language, then your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "3_night_hotel_stay_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                3 Night Hotel Stay
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a reservation request form
                offering two adults 21 years of age or older and up to two
                children under the age of 18, three nights of hotel
                accommodations in the city of their choice of available
                destination cities. You must redeem your certificate before the
                expiration date in order to activate your offer. Any fees to
                redeem or activate this offer are non refundable, if applicable.
                Once activated you will have 24 months to register with the
                fulfilling travel agency and the travel must be completed within
                this time. Your only cost after activation is $19-$39 per night.
                $20-$29 per night for Friday and Saturday night stays. A
                surcharge of $5-$13 per child per night up to two children is
                required. In order to guarantee that you will show up to your
                booked reservation you will be required to pay a REFUNDABLE $50
                Reservation Guarantee Deposit. If you send in your reservation
                request with fees and cancel before we have the chance to book
                one of your three choices then the reservation guarantee deposit
                will not be refundable. These fees are paid directly to the
                fulfillment travel agency at the time of reservation request and
                are payable online or by money order. Fees must be paid within
                72 hours of reservation request submission or offer will be
                voided. Dates 7 days before and after holidays and conventions
                are not available. This offer is valid 7 days a week and subject
                to availability. Dates near holidays, peak season, weekends and
                during major conventions are not available. Additional terms and
                conditions may apply with each independent property. Any
                additional fees such as but not limited to: hotel/resort/condo
                fees, miscellaneous taxes, maid service fees and any other
                incidental charges are the responsibility of the travelers and
                would be additional. This offer is not good for group travel of
                two or more certificate holders. This certificate cannot be
                combined with any other promotional vacation offer. <br />
                <br />
                The expiration date on this certificate pertains only to
                activation of this certificate and not actual travel. Travel
                must be completed within 24 months of activation. This
                certificate has no cash surrender value. Void if discontinued
                and where prohibited by law. Only one redemption per household
                every 24 months allowed. The terms of this offer are subject to
                change without notice. Do not make travel arrangements until you
                receive a written booking confirmation number. This certificate
                will be considered void if manipulated in any way or altered in
                any unauthorized manner. All promotional inventory is based
                strictly on availability. A minimum 30 days advance notice
                required for your soonest arrival date. Travelers must submit
                three different arrival dates at least 30 days apart and three
                different destinations in order to participate. The travel
                agency reserves the right to offer alternate arrival dates and
                destinations. By participating in this promotional offer you
                release all distributors, 3rd party administrators, fulfilling
                travel agencies of liability of any actual or potential loss
                that may arise in connection with this offer. This offer has no
                cash value. Each traveler is responsible for all necessary
                travel documents for each country they visit. Once activated
                this offer is tied to the original redeemer and not
                transferable. Do not rely upon representations other than what
                is printed on this certificate. You must be able to speak, read,
                type and fully understand the English language. If you cannot
                speak, read and understand the English language, then your offer
                will be voided.
              </div>
            </div>
          </>
        ) : pathname === "4_night_hotel_stay_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                4 Night Hotel Stay
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a reservation request form
                offering two adults 21 years of age or older and up to two
                children under the age of 18, four nights of hotel
                accommodations in the city of their choice of available
                destination cities. You must redeem your certificate before the
                expiration date in order to activate your offer. Any fees to
                redeem or activate this offer are non refundable, if applicable.
                Once activated you will have 24 months to register with the
                fulfilling travel agency and the travel must be completed within
                this time. Your only cost after activation is $19-$39 per night.
                $20-$29 per night for Friday and Saturday night stays. A
                surcharge of $5-$13 per child per night up to two children is
                required. In order to guarantee that you will show up to your
                booked reservation you will be required to pay a REFUNDABLE $50
                Reservation Guarantee Deposit. If you send in your reservation
                request with fees and cancel before we have the chance to book
                one of your three choices then the reservation guarantee deposit
                will not be refundable. These fees are paid directly to the
                fulfillment travel agency at the time of reservation request and
                are payable online or by money order. Fees must be paid within
                72 hours of reservation request submission or offer will be
                voided. Dates 7 days before and after holidays and conventions
                are not available.
                <br />
                <br /> This offer is valid 7 days a week and subject to
                availability. Dates near holidays, peak season, weekends and
                during major conventions are not available. Additional terms and
                conditions may apply with each independent property. Any
                additional fees such as but not limited to: hotel/resort/condo
                fees, miscellaneous taxes, maid service fees and any other
                incidental charges are the responsibility of the travelers and
                would be additional. This offer is not good for group travel of
                two or more certificate holders. This certificate cannot be
                combined with any other promotional vacation offer. The
                expiration date on this certificate pertains only to activation
                of this certificate and not actual travel. Travel must be
                completed within 24 months of activation. This certificate has
                no cash surrender value. Void if discontinued and where
                prohibited by law. Only one redemption per household every 24
                months allowed. The terms of this offer are subject to change
                without notice. Do not make travel arrangements until you
                receive a written booking confirmation number.
                <br />
                <br /> This certificate will be considered void if manipulated
                in any way or altered in any unauthorized manner. All
                promotional inventory is based strictly on availability. A
                minimum 30 days advance notice required for your soonest arrival
                date. Travelers must submit three different arrival dates at
                least 30 days apart and three different destinations in order to
                participate. The travel agency reserves the right to offer
                alternate arrival dates and destinations. By participating in
                this promotional offer you release all distributors, 3rd party
                administrators, fulfilling travel agencies of liability of any
                actual or potential loss that may arise in connection with this
                offer. This offer has no cash value. Each traveler is
                responsible for all necessary travel documents for each country
                they visit. Once activated this offer is tied to the original
                redeemer and not transferable. Do not rely upon representations
                other than what is printed on this certificate. You must be able
                to speak, read, type and fully understand the English language.
                If you cannot speak, read and understand the English language,
                then your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "4_night_mexico_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                4 Night Mexico Resort Getaway
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate will be considered void if bartered or
                purchased for legal tender by the recipient. This certificate is
                valid for a reservation request form offering two adults and up
                to two children 11 years of age or younger up to 4 nights of
                Resort Accommodations in your choice of either Mazatlan,
                Acapulco, Puerto Vallarta, Nuevo Vallarta or Cancun (Mayan
                Riviera), Mexico! You must redeem this certificate in order to
                activate the offer. Your cost to book the reservation is just
                taxes and fees for a total of $149. All reservations require a
                minimum of 30 days advance notice to book. This offer is only
                good for English speaking individuals. Departures and check ins
                are Sundays, Mondays or Tuesdays. The recipient of this
                certificate is responsible for all expenses including but not
                limited to: transfers, food, gratuities, all pertinent fees,
                Mexican Government taxes, hotel surcharges and any other
                miscellaneous expenses. After redemption please allow up to 7
                days for processing. After we process your redemption we will
                email you the activated reservation form and direct phone number
                to your assigned travel agent. This certificate cannot be
                combined with any other promotional vacation offer. The
                expiration date on this certificate pertains only to activation
                of this certificate and not actual travel. You must activate
                this certificate by the expiration date printed on this
                certificate in order to access the reservation request form.
                Travel can be completed within 24 months after activation. Only
                one certificate per household per year. This certificate has no
                cash surrender value, void if discontinued and where prohibited
                by law. The terms of this offer are subject to change without
                notice. Do not rely upon representations other than what is
                printed on this certificate or the reservation request form.
              </div>
            </div>
          </>
        ) : pathname === "5_day_4_night_cruise" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                5 Day 4 Night Cruise
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a reservation registration
                validation form offering two adults 21 years of age or older a 4
                night Cruise aboard one of these popular cruise lines: Carnival
                Cruise Lines, Royal Caribbean, Norwegian Cruise Lines, or
                Princess Cruises. There are 3 itineraries w/ ports of departure
                including: Miami to Cozumel, Port Canaveral to Nassau, or LA to
                Ensenada, Mexico. All cruises include unlimited access to the
                on-board buffets for breakfast, lunch and dinner. Vegas style
                entertainment and use of all on-board facilities. Bookings
                require at least a 30 day advance notice. Includes entry level
                category cabin 1a. You must redeem your certificate before the
                expiration date in order to activate your offer. Once activated
                you will have 24 months to register with the fulfilling travel
                agency and the travel must be completed within this time. Your
                only cost after activation is $258.96 per person = $517.92 per
                couple. Additional travelers will incur additional fees. Weekday
                departures only. These fees are paid directly to the fulfillment
                travel agency and are payable by credit card at the time of
                booking over the phone. Dates near holidays, peak season,
                weekends and during major conventions will require additional
                fees. Additional terms and conditions may apply with each
                independent property. Any additional fees such as but not
                limited to: hotel/resort/condo fees, miscellaneous taxes, maid
                service fees and any other incidental charges are the
                responsibility of the travelers. This offer is not good for
                group travel of two or more certificate holders. <br />
                <br /> This certificate cannot be combined with any other
                promotional vacation offer. The expiration date on this
                certificate pertains only to activation of this certificate and
                not actual travel. Travel must be completed within 24 months of
                activation. This certificate has no cash surrender value. Void
                if discontinued and where prohibited by law. Only one redemption
                per household every 24 months allowed. The terms of this offer
                are subject to change without notice. Do not make travel
                arrangements until you receive a written booking confirmation
                number. This certificate will be considered void if manipulated
                in any way or altered in any unauthorized manner. All
                promotional inventory is based strictly on availability. The
                travel agency reserves the right to offer alternate arrival
                dates and destinations. By participating in this promotional
                offer you release all distributors, 3rd party administrators,
                fulfilling travel agencies of liability of any actual or
                potential loss that may arise in connection with this offer.
                This offer has no cash value. Each traveler is responsible for
                all necessary travel documents for each country they visit. Any
                fees to redeem or activate this offer are non refundable, if
                applicable. Once activated this offer is tied to the original
                redeemer and not transferable. Do not rely upon representations
                other than what is printed on this certificate. You must be able
                to speak, read, type and fully understand the English language.
                If you cannot speak, read and understand the English language,
                then your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "7_night_luxury_resort_getaway" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                7 Night Resort Stay
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate will be considered void if bartered or
                purchased for legal tender by the recipient. This vacation
                certificate is valid for a reservation request form offering up
                to 4 travelers with 7 nights in one of 3500 available
                resorts/condos based upon availability. You must redeem this
                certificate before it expires in order to activate the offer.
                After activation your only cost would range from $280-$398 per
                week (7 Nights) per unit. All fees are paid online by credit
                card at the time of booking. Additional terms and conditions may
                apply with each independent property. Any additional
                resort/condo fees, taxes, maid service fees and any other
                incidental charges are the responsibility of the travelers. All
                fees associated with this offer are the same regardless of late
                check-in or early check out. Weekly rental price pays for
                accommodations only and does not include any upgrades for
                all-inclusive resort fees. <br />
                <br />
                Reservation requests can be made with as little as 7 days
                advance notice, if available. This offer is not good for group
                travel. This certificate cannot be combined with any other
                promotional vacation offer. The expiration date on this
                certificate pertains only to activation of this certificate and
                not actual travel. You must activate this certificate by the
                expiration date printed on this certificate in order to be able
                to view the available properties within our inventory. Travel
                must be completed within 24 months after activation. This
                certificate has no cash surrender value, void if discontinued
                and where prohibited by law. The terms of this offer are subject
                to change without notice. Do not rely upon representations other
                than what is printed on this certificate. You must be able to
                speak, read, type and fully understand the English language. If
                you cannot speak, read and understand the English language, then
                your offer will be voided.
              </div>
            </div>
          </>
        ) : pathname === "roundtrip_airfare_and_hotel" ? (
          <>
            <div
              className={
                "flex flex-col justify-center items-start sm:gap-[24px] gap-[10px] h-full"
              }
            >
              <span
                className={
                  "font-extrabold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                }
              >
                Roundtrip Airfare & Hotel
              </span>
            </div>
            <div className={"flex flex-col"}>
              <div
                className={
                  "text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                }
              >
                This certificate is void if bartered or sold to the recipient.
                This certificate is valid for a reservation registration
                validation form offering a bundled air and hotel package for two
                adults 21 years of age or older with two nights of standard
                hotel accommodations plus two round trip airline tickets from a
                participating Major International Airport in The Continental
                United States. Bookings require at least a 30 day advance
                notice. You must redeem your certificate before the expiration
                date in order to activate your offer. Once activated you will
                have 24 months to register with the fulfilling travel agency and
                the travel must be completed within this time. Your only cost
                after activation is $199.00 per person = $398.00 per couple for
                all hotel taxes, airline taxes, airport fees, agency fees, etc
                and these fees are based on a double occupancy requirement.
                Additional travelers will incur additional fees. Transfers to
                and from the airport are not included. These fees are paid
                directly to the fulfillment travel agency and are payable by
                credit card at the time of booking over the phone. Dates near
                holidays, weekends and during major conventions are not
                available. Additional terms and conditions may apply with each
                independent property.
                <br />
                <br /> Guests that would like to book only a promotional
                vacation with no upgrades or enhancements will be entitled to
                travel to one of the nominated cities within their geographical
                half of the continental USA divided East and West. Any
                additional fees such as but not limited to: hotel/resort/condo
                fees, miscellaneous taxes, maid service fees and any other
                incidental charges are the responsibility of the travelers. This
                offer is not good for group travel of two or more certificate
                holders. This certificate cannot be combined with any other
                promotional vacation offer. The expiration date on this
                certificate pertains only to activation of this certificate and
                not actual travel. Departures and Check in are Sunday, Monday,
                Tuesday. Upgrades, extensions, adding additional travelers can
                be done at the time of booking and will require extra charges
                that will be provided at the time of reservation request. Travel
                must be completed within 24 months of activation. This
                certificate has no cash surrender value. Void if discontinued
                and where prohibited by law. Only one redemption per household
                every 24 months allowed. <br />
                <br />
                The terms of this offer are subject to change without notice. Do
                not make travel arrangements until you receive a written booking
                confirmation number. This certificate will be considered void if
                manipulated in any way or altered in any unauthorized manner.
                All promotional inventory is based strictly on availability. By
                participating in this promotional offer you release all
                distributors, 3rd party administrators, fulfilling travel
                agencies of liability of any actual or potential loss that may
                arise in connection with this offer. This offer has no cash
                value. Each traveler is responsible for all necessary travel
                documents for each country they visit. Once activated this offer
                is tied to the original redeemer and not transferable. The
                travel agency reserves the right to offer alternate arrival
                dates and destinations. Do not rely upon representations other
                than what is printed on this certificate. You must be able to
                speak, read, type and fully understand the English language. If
                you cannot speak, read and understand the English language as
                our agents are , then your offer will be voided.
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </Layout>
  );
};
export default TermAndCondition;
