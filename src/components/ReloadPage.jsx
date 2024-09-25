import React from 'react';
import threads from '../assets/threads.png'; 

const ReloadPage = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }} onClick={handleReload}>
      <img src={threads} alt="Reload" className="Img-icon"/>    </div>
  );
};

export default ReloadPage;
