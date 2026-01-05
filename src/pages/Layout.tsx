import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { Header, Footer, Modal, WaitlistForm, PageWrapper } from '../components';
import { waitlistContent } from '../content/site';
import styles from './Layout.module.css';

interface LayoutContext {
  openWaitlist: () => void;
}

export function Layout() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <PageWrapper>
      <div className={styles.layout}>
        <Header />
        
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
    </PageWrapper>
  );
}

export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}