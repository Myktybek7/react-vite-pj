import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({
    name: 'Myktybek',
    position: 'Junior',
    company: 'Apple',
    age: 19,
    hobbie: 'Volleyball',
    experience: '1 year',
    city: 'Bishkek'
  });

  const [message, setMessage] = useState('');

  const promotePerson = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      position: prevPerson.position === 'Junior' ? 'Senior' : 'Junior'
    }));
  };

  const showMessage = () => {
    setMessage('Hello, ' + person.name + '! Welcome to the company!');
    promotePerson();
  };

  return (
    <div className="App">
      <h1>Information about person</h1>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Position:</strong> {person.position}</p>
      <p><strong>Company:</strong> {person.company}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>City:</strong> {person.city}</p>
      <p><strong>Experience:</strong> {person.experience}</p>

      {message && <p>{message}</p>}

      <button onClick={showMessage}>
        Promote to {person.position === 'Junior' ? 'Senior' : 'Junior'}
      </button>
    </div>
  );
}

export default App;
