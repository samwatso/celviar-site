import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { formEndpoints } from '../config/links';
import { waitlistContent } from '../content/site';
import styles from './WaitlistForm.module.css';

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    city: '',
    interests: [] as string[],
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'consent') {
      setFormData(prev => ({ ...prev, consent: checked }));
    } else if (type === 'checkbox') {
      // Interest checkboxes
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!formData.email || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage(waitlistContent.error.invalidEmail);
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    
    try {
      // In production, POST to formEndpoints.waitlist
      console.log('Submitting to:', formEndpoints.waitlist, formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      onSuccess?.();
    } catch {
      setStatus('error');
      setErrorMessage(waitlistContent.error.generic);
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successHeadline}>{waitlistContent.success.headline}</h3>
        <p className={styles.successBody}>{waitlistContent.success.body}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.subhead}>{waitlistContent.subhead}</p>

      <div className={styles.fields}>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={waitlistContent.form.emailPlaceholder}
          variant="dark"
          required
        />

        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder={waitlistContent.form.namePlaceholder}
          variant="dark"
        />

        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder={waitlistContent.form.cityPlaceholder}
          variant="dark"
        />

        {/* Interest checkboxes */}
        <div className={styles.interestGroup}>
          <span className={styles.interestLabel}>Interest (optional)</span>
          <div className={styles.checkboxGrid}>
            {waitlistContent.form.interestOptions.map((option) => (
              <label key={option} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="interest"
                  value={option}
                  checked={formData.interests.includes(option)}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Consent checkbox */}
        <label className={styles.consentLabel}>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span className={styles.consentText}>{waitlistContent.form.consentText}</span>
        </label>
      </div>

      {errorMessage && (
        <p className={styles.error}>{errorMessage}</p>
      )}

      <Button 
        type="submit" 
        variant="secondary" 
        size="lg" 
        fullWidth
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Joining...' : waitlistContent.form.submitButton}
      </Button>

      {/* Incentives */}
      <div className={styles.incentives}>
        {waitlistContent.incentives.map((incentive, index) => (
          <span key={index} className={styles.incentive}>
            <span className={styles.incentiveIcon}>•</span>
            {incentive}
          </span>
        ))}
      </div>
    </form>
  );
}
