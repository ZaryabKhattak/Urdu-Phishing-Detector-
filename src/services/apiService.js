/**
 * API Service Layer
 * Handles all API communications and mock responses
 */

import { APP_CONFIG } from '../constants/config';
import { delay } from '../utils/helpers';

/**
 * Mock phishing detection API call
 * Simulates backend processing with random results
 * 
 * @param {string} message - Message text to analyze
 * @returns {Promise<Object>} Analysis result object
 * @throws {Error} If message is empty or API call fails
 */
export const analyzeMessage = async (message) => {
  try {
    // Validate input
    if (!message || message.trim().length === 0) {
      throw new Error('Message cannot be empty');
    }

    // Simulate API processing delay
    await delay(APP_CONFIG.api.processingDelay);

    // Mock API response - in production, replace with actual API call
    if (APP_CONFIG.features.mockApi) {
      const isSafe = Math.random() > 0.5;
      
      return {
        classification: isSafe ? 'SAFE' : 'SCAM',
        confidence: isSafe 
          ? parseFloat((90 + Math.random() * 9).toFixed(1))
          : parseFloat((75 + Math.random() * 20).toFixed(1)),
        details: isSafe 
          ? 'This message appears to be legitimate and safe. No suspicious patterns or phishing indicators were detected.'
          : 'This message contains suspicious patterns commonly found in phishing attempts. Please verify the sender before taking any action.',
        timestamp: new Date().toISOString(),
      };
    }

    // Production API call (uncomment when backend is ready)
    /*
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
      timeout: APP_CONFIG.api.timeout,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
    */
  } catch (error) {
    console.error('Error analyzing message:', error);
    throw new Error('Failed to analyze message. Please try again.');
  }
};

/**
 * Submit contact form
 * Handles contact form submissions
 * 
 * @param {Object} formData - Contact form data
 * @param {string} formData.firstName - First name
 * @param {string} formData.lastName - Last name
 * @param {string} formData.email - Email address
 * @param {string} formData.message - Message content
 * @returns {Promise<Object>} Submission result
 * @throws {Error} If submission fails
 */
export const submitContactForm = async (formData) => {
  try {
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Simulate submission delay
    await delay(1000);

    // Mock successful submission
    if (APP_CONFIG.features.mockApi) {
      return {
        success: true,
        message: 'Your message has been sent successfully!',
      };
    }

    // Production API call (uncomment when backend is ready)
    /*
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      timeout: APP_CONFIG.api.timeout,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
    */
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};
