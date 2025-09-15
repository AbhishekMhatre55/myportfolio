
import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", maxWidth: 900, margin: '2rem auto', padding: '0 1rem'}}>
      <header style={{ textAlign: 'center', marginBottom: '2rem'}}>
        <h1 style={{ color: '#007bff', fontWeight: '700', letterSpacing: '1px' }}>
          Abhishek Mhatre
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Integration Specialist
        </p>
      </header>

      <section>
        <h2 style={{ borderBottom: '2px solid #007bff', display: 'inline-block', paddingBottom: '0.25rem', color: '#007bff'}}>About Me</h2>
        <p>
          Hello! I'm Abhishek Mhatre, a passionate Integration Specialist with expertise in designing and implementing enterprise integration solutions that streamline business processes and enhance connectivity.
        </p>
      </section>

      <section>
        <h2 style={{ borderBottom: '2px solid #007bff', display: 'inline-block', paddingBottom: '0.25rem', color: '#007bff'}}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            'Enterprise Integration', 'SOAP & REST APIs', 'WebMethods (v10.15)',
            'WS-ReliableMessaging', 'WSDL & XML Schema', 'Middleware Solutions',
            'Troubleshooting & Debugging', 'Agile & DevOps'
          ].map(skill => (
            <div key={skill} style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '0.9rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ borderBottom: '2px solid #007bff', display: 'inline-block', paddingBottom: '0.25rem', color: '#007bff'}}>Contact</h2>
        <p>
          You can connect with me on <a href="https://www.linkedin.com/in/abhishek-mhatre" target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'none'}}>LinkedIn</a> or send me an <a href="mailto:abhishek@example.com" style={{color: '#007bff', textDecoration: 'none'}}>email</a>.
        </p>
      </section>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#666', fontSize: '0.9rem'}}>
        &copy; 2025 Abhishek Mhatre. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
