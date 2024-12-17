import React, { useEffect, useState } from 'react';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  // Check the URL to decide whether to show the Register form
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('register')) {
      setIsRegister(true);
    }
  }, []);

  // Handle the Register button click
  const handleRegisterClick = () => {
    window.location.href = '?register=true';
  };

  return (
    <div style={styles.container}>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form style={styles.form}>
        {isRegister && (
          <label>
            Username:
            <input type="text" placeholder="Enter your username" style={styles.input} />
          </label>
        )}
        <label>
          Email:
          <input type="email" placeholder="Enter your email" style={styles.input} />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" style={styles.input} />
        </label>

        {isRegister ? (
          <button type="submit" style={{ ...styles.button, backgroundColor: '#4CAF50' }}>
            Register
          </button>
        ) : (
          <button type="submit" style={styles.button}>
            Login
          </button>
        )}

        {!isRegister && (
          <button
            type="button"
            onClick={handleRegisterClick}
            style={{ ...styles.button, backgroundColor: '#4CAF50' }}
          >
            Register
          </button>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Login;
