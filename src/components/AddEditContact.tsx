import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../redux/contact/contactSlice"; // Import the action
import InputText from "./InputText";
import ContactList from "./ContactList"; // Import the ContactList component

const inputFields = [
  { name: "Name", placeholder: "Enter the Name", field: "name" },
  { name: "Last Name", placeholder: "Enter Last Name", field: "lastName" },
  { name: "Address", placeholder: "Enter the Address", field: "address" },
  { name: "City", placeholder: "Enter City", field: "city" },
  { name: "Country", placeholder: "Enter Country", field: "country" },
  { name: "Email", placeholder: "Enter the Email", field: "email" },
  { name: "Number", placeholder: "Enter the Number", field: "number" },
];

const AddEditContact = ({ contact, setSelectedContact }: any) => {
  const dispatch = useDispatch();
  const [showContactList, setShowContactList] = useState(false); // State to control visibility of ContactList
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    email: "",
    number: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await dispatch(createContact(formData)).unwrap();
      setSelectedContact(null); // Reset selected contact
      setShowContactList(true); // Show ContactList after saving
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  // Render ContactList if showContactList is true
  if (showContactList) {
    return <ContactList />; // Replace this with your actual ContactList component
  }

  return (
    <div>
      <div className="text-[32px] font-bold mb-16">Register new contact</div>
      {inputFields.map((input, index) => (
        <InputText
          key={index}
          label={input.name}
          placeholder={input.placeholder}
          value={formData[input.field as keyof typeof formData]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, input.field)
          }
        />
      ))}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={() => setSelectedContact(null)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddEditContact;
