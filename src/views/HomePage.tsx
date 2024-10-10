import React from "react";
import ContactsList from "../components/ContactList";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center mx-[500px] my-24">
      <ContactsList />
    </div>
  );
};

export default HomePage;
