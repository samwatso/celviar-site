import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Layout,
  Home,
  ProductPage,
  WaitlistPage,
  FoundingMemberPage,
  SciencePage,
  RitualsPage,
  JournalPage,
  AboutPage,
  StockistsPage,
  ContactPage,
  FAQPage,
  ShippingReturnsPage,
  PrivacyPage,
  TermsPage,
  CookiesPage,
  NotFoundPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />
          
          {/* Product */}
          <Route path="product/rich-salve" element={<ProductPage />} />
          
          {/* Main pages */}
          <Route path="waitlist" element={<WaitlistPage />} />
          <Route path="founding-member" element={<FoundingMemberPage />} />
          <Route path="science" element={<SciencePage />} />
          <Route path="rituals" element={<RitualsPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="stockists" element={<StockistsPage />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* Info pages */}
          <Route path="faq" element={<FAQPage />} />
          <Route path="shipping-returns" element={<ShippingReturnsPage />} />
          
          {/* Legal pages */}
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
