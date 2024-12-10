import React, { useEffect, useState } from 'react';
import ContactCard from './components/ContactCard';
import SearchBar from './components/SearchBar';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setContacts(data);
        setFilteredContacts(data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  useEffect(() => {
    // Filter contacts based on the search query
    const query = searchQuery.toLowerCase();
    const filtered = contacts.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.username.toLowerCase().includes(query)
    );
    setFilteredContacts(filtered);
  }, [searchQuery, contacts]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">My Contacts</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <div className="row">
        {filteredContacts.map(contact => (
          <div key={contact.id} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <ContactCard contact={contact} />
          </div>
        ))}
        {filteredContacts.length === 0 && (
          <div className="text-center">
            <h5>No results found.</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
