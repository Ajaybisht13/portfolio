import React, { useEffect } from 'react';

const App = () => {
  const customScheme = 'myapp://home'; // Replace with your app's custom scheme
  const appStoreURL = 'https://play.google.com'; // Replace with your app's store URL

  useEffect(() => {
    // Redirect to app or app store
    const redirect = () => {
      const timer = setTimeout(() => {
        // If the app isn't installed, redirect to the app store
        window.location.href = appStoreURL;
      }, 2000);

      // Attempt to open the app using the custom scheme
      window.location.href = customScheme;

      return () => clearTimeout(timer);
    };

    redirect();
  }, []);

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
