import React from "react";
import ContactsList from "../components/ContactList";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center mx-[500px] my-24">
      <div className="text-[32px] font-bold mb-16">Contacts</div>
      <ContactsList />
    </div>
  );
};

export default HomePage;
