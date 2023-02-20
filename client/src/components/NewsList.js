import React from "react";
import NewsCard from "./NewsCard";

const NewsList = () => {
  return (
    <section className="flex flex-col gap-3">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </section>
  );
};

export default NewsList;
