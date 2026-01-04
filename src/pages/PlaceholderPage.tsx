import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Button } from '../components';
import styles from './PlaceholderPage.module.css';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Section variant="dark" spacing="xl">
      <Container size="sm">
        <div className={styles.content}>
          <span className={styles.label}>Coming Soon</span>
          <h1 className={styles.title}>{title}</h1>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// Pre-built placeholder pages for each route
export function ProductPage() {
  return (
    <PlaceholderPage 
      title="Rich Salve" 
      description="Drop 001 — The all-purpose balm for glossy hydration, barrier comfort, and a dewy finish."
    />
  );
}

export function WaitlistPage() {
  return (
    <PlaceholderPage 
      title="Become a Founding Member" 
      description="Join our community for early access to drops and exclusive updates."
    />
  );
}

export function FoundingMemberPage() {
  return (
    <PlaceholderPage 
      title="Become a Founding Member" 
      description="Join our community for early access to drops and exclusive updates."
    />
  );
}

export function SciencePage() {
  return (
    <PlaceholderPage 
      title="The Science" 
      description="PDRN, decoded. A polynucleotide ingredient loved in modern K-beauty."
    />
  );
}

export function RitualsPage() {
  return (
    <PlaceholderPage 
      title="Rituals" 
      description="Your ritual, your rules. Rich Salve is designed to move with you."
    />
  );
}

export function JournalPage() {
  return (
    <PlaceholderPage 
      title="The Celviar Edit" 
      description="Product rituals, ingredient lore, and the culture of looking after yourself."
    />
  );
}

export function AboutPage() {
  return (
    <PlaceholderPage 
      title="About" 
      description="Science, indulgence, and the art of renewal."
    />
  );
}

export function StockistsPage() {
  return (
    <PlaceholderPage 
      title="Stockists" 
      description="Celviar is currently available online only. Select retail partners coming soon."
    />
  );
}

export function ContactPage() {
  return (
    <PlaceholderPage 
      title="Contact" 
      description="Get in touch with the Celviar team."
    />
  );
}

export function FAQPage() {
  return (
    <PlaceholderPage 
      title="FAQ" 
      description="Frequently asked questions about shipping, orders, and products."
    />
  );
}

export function ShippingReturnsPage() {
  return (
    <PlaceholderPage 
      title="Shipping & Returns" 
      description="Information about delivery and our returns policy."
    />
  );
}

export function PrivacyPage() {
  return (
    <PlaceholderPage 
      title="Privacy Policy" 
      description="How we handle your data."
    />
  );
}

export function TermsPage() {
  return (
    <PlaceholderPage 
      title="Terms & Conditions" 
      description="Terms of use for Celviar.com"
    />
  );
}

export function CookiesPage() {
  return (
    <PlaceholderPage 
      title="Cookie Policy" 
      description="Information about how we use cookies."
    />
  );
}

export function NotFoundPage() {
  return (
    <Section variant="dark" spacing="xl">
      <Container size="sm">
        <div className={styles.content}>
          <span className={styles.label}>404</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
