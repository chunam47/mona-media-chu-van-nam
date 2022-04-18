import React, { useState } from "react";
import Accordion from "../../components/Accordion";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SubHeader from "../../components/SubHeader";
import { ListCustom } from "./styled";
import YourFlight from "../../components/YourFlight";
import FlightInfo from "../../components/FlightInfo";
import Filter from "../../components/Filter";
import FareInfo from "../../components/FlightDetail/components/FareInfo";
import BambooLogo from "../../components/icons/bamboo.png";
import VnAirLogo from "../../components/icons/vn-air.png";
import FlightDetail from "../../components/FlightDetail";

function Search() {
  const flightsData = [
    {
      airlines: {
        name: "Bamboo Airways",
        logo: BambooLogo,
      },
      baggage: "20kg",
      inFlight: ["Meal", "Entertainment"],
      departureTime: "21h40",
      departureDate: "11 Feb",
      landingTime: "23h10",
      landingDate: "11 Feb",
      from: {
        shortName: "DAD",
        fullName: "Da Nang",
        airPort: "Da Nang",
      },
      to: {
        shortName: "SGN",
        fullName: "Ho Chi Minh",
        airPort: "Tan Son Nhat",
      },
      flightCode: "QH-183",
      flightClass: "Economy",
      aircraft: "Airbus A321",
      seat: "3-3",
      seatPitch: "29 inches (standard)",
      discountPrice: "1,322,000 vnd",
      flightDuration: "1h 30m",
      saveAmount: "-4,000 vnd",
      include: false,
      refundable: false,
      price: "1,326,000 vnd",
    },
    {
      airlines: {
        name: "Bamboo Airways",
        logo: BambooLogo,
      },
      baggage: "20kg",
      inFlight: ["Meal", "Entertainment"],
      departureTime: "21h40",
      departureDate: "11 Feb",
      landingTime: "23h10",
      landingDate: "11 Feb",
      from: {
        shortName: "DAD",
        fullName: "Da Nang",
        airPort: "Da Nang",
      },
      to: {
        shortName: "SGN",
        fullName: "Ho Chi Minh",
        airPort: "Tan Son Nhat",
      },
      flightCode: "QH-183",
      flightClass: "Economy",
      aircraft: "Airbus A321",
      seat: "3-3",
      seatPitch: "29 inches (standard)",
      discountPrice: "1,322,000 vnd",
      flightDuration: "1h 30m",
      saveAmount: "-4,000 vnd",
      include: false,
      refundable: false,
      price: "1,326,000 vnd",
    },
    {
      airlines: {
        name: "Vietnam Airlines",
        logo: VnAirLogo,
      },
      baggage: "20kg",
      inFlight: ["Meal", "Entertainment"],
      departureTime: "21h40",
      departureDate: "11 Feb",
      landingTime: "23h10",
      landingDate: "11 Feb",
      from: {
        shortName: "DAD",
        fullName: "Da Nang",
        airPort: "Da Nang",
      },
      to: {
        shortName: "SGN",
        fullName: "Ho Chi Minh",
        airPort: "Tan Son Nhat",
      },
      flightCode: "QH-183",
      flightClass: "Economy",
      aircraft: "Airbus A321",
      seat: "3-3",
      seatPitch: "29 inches (standard)",
      discountPrice: "1,322,000 vnd",
      flightDuration: "1h 30m",
      saveAmount: "-4,000 vnd",
      include: false,
      refundable: false,
      price: "1,326,000 vnd",
    },
    {
      airlines: {
        name: "Vietnam Airlines",
        logo: VnAirLogo,
      },
      baggage: "20kg",
      inFlight: ["Meal", "Entertainment"],
      departureTime: "21h40",
      departureDate: "11 Feb",
      landingTime: "23h10",
      landingDate: "11 Feb",
      from: {
        shortName: "DAD",
        fullName: "Da Nang",
        airPort: "Da Nang",
      },
      to: {
        shortName: "SGN",
        fullName: "Ho Chi Minh",
        airPort: "Tan Son Nhat",
      },
      flightCode: "QH-183",
      flightClass: "Economy",
      aircraft: "Airbus A321",
      seat: "3-3",
      seatPitch: "29 inches (standard)",
      discountPrice: "1,322,000 vnd",
      flightDuration: "1h 30m",
      saveAmount: "-4,000 vnd",
      include: false,
      refundable: false,
      price: "1,326,000 vnd",
    },
  ];

  const flights = flightsData.map((flight, index) => ({
    heading: (props) => <FlightInfo data={flight} {...props} />,
    content: (props) => <FlightDetail data={flight} {...props} />,
  }));
  return (
    <>
      <Header backgroundColor />
      <div className="bg-gray-200 container">
        <SubHeader />
        <ListCustom className="lg:grid lg:grid-cols-9 flex flex-col-reverse lg:gap-4 ">
          <div className="col-span-7 lg:mt-5 mt-0">
            {/* <!-- Filter --> */}
            <Filter />
            {flights.map((flight, index) => (
              <Accordion heading={flight.heading} content={flight.content} />
            ))}
          </div>
          <YourFlight />
          {/* Left End */}
        </ListCustom>
      </div>
      <Footer />
    </>
  );
}

export default Search;
