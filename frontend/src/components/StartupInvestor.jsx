import React from 'react';
import './StartupButton.css';

const StartupInvestor = () => {
  const handleClick = () => {
    // This function will handle the navigation to the StartupPage
    console.log('Navigating to StartupPage');
    // You can use react-router or any navigation library here
    // For example: history.push('/StartupPage');
  };

  return (
    <div className="startup-button" onClick={handleClick}>
      Invest for Ideas? <br />
    </div>
  );
};

export default StartupInvestor;