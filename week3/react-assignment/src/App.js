import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  const [user] = useState({ name: 'John Doe', email: 'john.doe@example.com' });

  return (
    <div className="App">
      <Header />
      <Profile name={user.name} email={user.email} />
      <Counter />
    </div>
  );
}

export default App;