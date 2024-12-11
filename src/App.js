import React from 'react';

const App = () => {
  const appStoreURL = 'https://play.google.com';

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Open MyApp</h1>
      <p style={styles.description}>
        If the app doesn’t open, please download it from the App Store.
      </p>
      <a href={appStoreURL} style={styles.link}>
        Open in App Store
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  link: {
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default App;
