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
    <ul>
      {contacts.map(
        (contact: {
          id: React.Key | null | undefined;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <li key={contact.id}>{contact.name}</li>
        )
      )}
    </ul>
  );
};

export default ContactsList;
