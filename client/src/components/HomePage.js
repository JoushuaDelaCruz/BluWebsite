import React from "react";
import NewsList from "./NewsList";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-indigo-400 bg-opacity-25 py-8 md:p-8">
        <NewsList />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
