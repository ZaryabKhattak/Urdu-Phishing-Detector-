/**
 * Main Screen Component - Improved Version
 * Landing page with phishing detection form
 * 
 * Features:
 * - Multi-step form with visual indicators
 * - Real-time state management
 * - Professional error handling
 * - Reusable components and hooks
 */

import React, { useState, useCallback } from 'react';
import SharedNavbar from './SharedNavbar';
import SharedFooter from './SharedFooter';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, TRANSITIONS } from '../constants/theme';
import { analyzeMessage } from '../services/apiService';
import { useAsync } from '../hooks';

// Step constants for better readability
const STEPS = {
  INITIAL: 0,
  TEXT_ENTERED: 1,
  PROCESSING: 2,
  RESULT: 3,
};

const MainScreenImproved = () => {
  const [message, setMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(STEPS.INITIAL);
  const [result, setResult] = useState(null);
  const { loading, error, execute } = useAsync();

  /**
   * Handles text input changes
   * Updates step based on text content
   */
  const handleTextChange = useCallback((e) => {
    const text = e.target.value;
    setMessage(text);
    
    if (text.trim().length > 0 && currentStep === STEPS.INITIAL) {
      setCurrentStep(STEPS.TEXT_ENTERED);
    } else if (text.trim().length === 0 && currentStep === STEPS.TEXT_ENTERED) {
      setCurrentStep(STEPS.INITIAL);
    }
  }, [currentStep]);

  /**
   * Handles message scanning
   * Calls API and updates result state
   */
  const handleScan = useCallback(async () => {
    if (message.trim().length === 0) return;
    
    try {
      setCurrentStep(STEPS.PROCESSING);
      const analysisResult = await execute(() => analyzeMessage(message));
      setResult(analysisResult);
      setCurrentStep(STEPS.RESULT);
    } catch (err) {
      console.error('Scan error:', err);
      setCurrentStep(STEPS.TEXT_ENTERED);
      // Error is already handled by useAsync hook
    }
  }, [message, execute]);

  /**
   * Resets the form to initial state
   */
  const handleReset = useCallback(() => {
    setMessage('');
    setCurrentStep(STEPS.INITIAL);
    setResult(null);
  }, []);

  const styles = {
    container: {
      background: COLORS.background.primary,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${SPACING['3xl']}px ${SPACING['2xl']}px`,
    },
    contentWrapper: {
      maxWidth: 1100,
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: SPACING['2xl'],
    },
    // Rest of styles...
  };

  return (
    <div style={styles.container}>
      <SharedNavbar activeRoute="/" />
      
      <main style={styles.mainContent}>
        <div style={styles.contentWrapper}>
          {/* Step Indicators - Will be extracted to component */}
          <div>
            {/* Step indicators content */}
          </div>
          
          {/* Main Form - Will be extracted to component */}
          <div>
            {currentStep !== STEPS.RESULT ? (
              <>
                {/* Form content */}
              </>
            ) : (
              <>
                {/* Result content */}
              </>
            )}
          </div>
        </div>
      </main>
      
      <SharedFooter />
    </div>
  );
};

export default MainScreenImproved;
