import React from 'react';

function SContent() {
  return (
    <main style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>Welcome, quorefy</h1>
        <p>Your Student Feed</p>
      </header>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="What's on your mind, quorefy?" style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Post</button>
      </div>
      <div>
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
          <h3>Michael Chen</h3>
          <p>Sagge at illo sed bellusus sed iste lenis sequi. Culpa haero basto accedo.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <span style={{ cursor: 'pointer' }}>Like</span>
            <span style={{ cursor: 'pointer' }}>Comment</span>
            <span style={{ cursor: 'pointer' }}>Share</span>
          </div>
        </div>
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
          <h3>Sarah Williams</h3>
          <p>Accusator vesper bene verecundia camur. Benificius alius mensa negotium aspernatur deprec.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <span style={{ cursor: 'pointer' }}>Like</span>
            <span style={{ cursor: 'pointer' }}>Comment</span>
            <span style={{ cursor: 'pointer' }}>Share</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SContent;