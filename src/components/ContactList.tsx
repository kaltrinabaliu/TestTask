import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from "../redux/contact/contactSlice";

const ContactsList = () => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector(
    (state: { contact: any }) => state.contact
  );

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Contact
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className=" border-b">
            <th className="text-left py-2 px-4">Name</th>
            <th className="text-left py-2 px-4">Last Name</th>
            <th className="text-left py-2 px-4">Address</th>
            <th className="text-left py-2 px-4">City</th>
            <th className="text-left py-2 px-4">Country</th>
            <th className="text-left py-2 px-4">Email</th>
            <th className="text-left py-2 px-4">Number</th>
            <th className="py-2 px-4">Edit</th>
            <th className="py-2 px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(
            (contact: {
              phoneNumbers: string;
              address: string;
              id: number;
              name: string;
              lastName: string;
              city: string;
              country: string;
              email: string;
              number: string;
            }) => (
              <tr
                key={contact.id}
                className={`border-b hover:bg-gray-100 ${
                  contact.id % 2 === 1 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="py-2 px-4">{contact.name}</td>
                <td className="py-2 px-4">{contact.lastName}</td>
                <td className="py-2 px-4">{contact.address}</td>
                <td className="py-2 px-4">{contact.city}</td>
                <td className="py-2 px-4">{contact.country}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">{contact.phoneNumbers}</td>
                <td className="py-2 px-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Edit
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
