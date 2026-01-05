import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Modal, WaitlistForm } from '../components';
import { waitlistContent } from '../content/site';
import styles from './Layout.module.css';

export function Layout() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className={styles.layout}>
      <Header onWaitlistClick={openWaitlist} />
      
      <main className={styles.main}>
        <Outlet context={{ openWaitlist }} />
      </main>
      
      <Footer />

      {/* Waitlist Modal */}
      <Modal
        isOpen={isWaitlistOpen}
        onClose={closeWaitlist}
        title={waitlistContent.headline}
      >
        <WaitlistForm onSuccess={() => {
          // Keep modal open to show success state
        }} />
      </Modal>
    </div>
  );
}

// Custom hook to access layout context
import { useOutletContext } from 'react-router-dom';

interface LayoutContext {
  openWaitlist: () => void;
}

export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}
