import React from "react";
import NewsList from "./NewsList";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = ({ authenticated }) => {
  return (
    <>
      <Header authenticated={authenticated} />
      <div className="py-8 md:p-8">
        <NewsList />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
