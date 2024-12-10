import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className="card mb-3 shadow-sm" style={{ minWidth: '250px' }}>
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">@{contact.username}</h6>
        <p className="card-text mb-1">
          <strong>Email:</strong> {contact.email}
        </p>
        <p className="card-text mb-1">
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p className="card-text">
          <strong>Website:</strong> {contact.website}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
