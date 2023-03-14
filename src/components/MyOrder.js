import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import LoginModal from '../pages/LogInModal';

export default function YourRequestButton() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { authenticatedUser } = useAuth();

  const handleRequestClick = () => {
    if (!authenticatedUser) {
      setShowLoginModal(true);
    } else {
      window.location.href = '/myorder';
    }
  };

  return (
    <>
      <button type="button" className='secondary-button' onClick={handleRequestClick}>
        your request
      </button>
      {showLoginModal && (
        <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)}/>
      )}
    </>
  );
}
