import React from 'react';

function SRightSide() {
  return (
    <aside style={{
      width: '250px',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>Your Courses</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '5px 0', padding: '5px', borderRadius: '5px' }}>Advanced Machine Learning</li>
          <li style={{ margin: '5px 0', padding: '5px', borderRadius: '5px' }}>Data Structures & Algorithms</li>
          <li style={{ margin: '5px 0', padding: '5px', borderRadius: '5px' }}>Test Development</li>
        </ul>
      </div>
      <div>
        <h3>Study Groups</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '5px 0', padding: '5px', borderRadius: '5px' }}>Algorithms DeepDive</li>
          <li style={{ margin: '5px 0', padding: '5px', borderRadius: '5px' }}>ML Research Team</li>
        </ul>
      </div>
    </aside>
  );
}

export default SRightSide;