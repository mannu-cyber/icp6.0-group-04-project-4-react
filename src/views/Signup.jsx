
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSignUp = () => {
    localStorage.setItem('userEmail', email);
    history.push('/otp');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
