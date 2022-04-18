import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SearchFlights from "../../components/SearchFlights";

function Home() {
  return (
    <>
      <Header backgroundColor={false} />
      <Banner />
      <SearchFlights />
      <Footer />
    </>
  );
}

export default Home;
