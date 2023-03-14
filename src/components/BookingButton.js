import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoginModal from '../pages/LogInModal';

export default function BookingButton({activeRoute}) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { authenticatedUser } = useAuth();
  const possibleRoutes = ['/booking'];
  const navigate = useNavigate();

  const handleBookingClick = () => {
    if (!authenticatedUser) {
      setShowLoginModal(true);
    } else {
        navigate('/booking');
    }
  };

  return (
    <>
      <button type="button" className={possibleRoutes.includes(activeRoute)? 'hidden-item':'primary-button'} onClick={handleBookingClick} style={{visibility:authenticatedUser?.role ==='ADMIN'?"hidden":""}}>
        book now
      </button>
      {showLoginModal && (
        <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)}/>
      )}
    </>
  );
}
