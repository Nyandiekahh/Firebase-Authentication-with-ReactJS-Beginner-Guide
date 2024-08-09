// src/App.js
import React, { useState } from 'react';
import { signIn, signOutUser } from './auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    const signedInUser = await signIn(email, password);
    setUser(signedInUser);
  };

  const handleSignOut = async () => {
    await signOutUser();
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default App;
