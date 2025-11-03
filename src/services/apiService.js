/**
 * API Service Layer
 * Handles all API communications with Sibghat's Flask backend
 * Updated to match backend response format: classification, confidence, details
 */

import { APP_CONFIG } from '../constants/config';
import { delay } from '../utils/helpers';

// Get API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const USE_MOCK_API = import.meta.env.VITE_ENABLE_MOCK_API === 'true';

/**
 * Analyze message for phishing detection
 * Connects to Sibghat's Flask backend at /api/analyze
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

    // Use mock API if enabled
    if (USE_MOCK_API) {
      await delay(APP_CONFIG.api.processingDelay);
      
      const isSafe = Math.random() > 0.5;
      
      return {
        classification: isSafe ? 'SAFE' : 'PHISHING',
        confidence: isSafe 
          ? parseFloat((90 + Math.random() * 9).toFixed(1))
          : parseFloat((75 + Math.random() * 20).toFixed(1)),
        details: isSafe 
          ? 'This message appears to be legitimate and safe. No suspicious patterns or phishing indicators were detected.'
          : 'This message contains suspicious patterns commonly found in phishing attempts. Please verify the sender before taking any action.',
        timestamp: new Date().toISOString(),
      };
    }

    // Real API call to Sibghat's backend
    console.log(`🔗 Calling API: ${API_BASE_URL}/api/analyze`);
    
    const response = await fetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Backend returns: { classification, confidence, details }
    // Frontend expects: { classification, confidence, details }
    // They match! Just pass through
    console.log('✅ Backend response:', data);
    
    return {
      classification: data.classification,  // "SAFE", "SUSPICIOUS", or "PHISHING"
      confidence: data.confidence,          // Already in percentage (e.g., 89.5)
      details: data.details,                // Human-readable message
      timestamp: new Date().toISOString(),
    };
    
  } catch (error) {
    console.error('❌ Error analyzing message:', error);
    
    // Provide user-friendly error messages
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Cannot connect to backend server. Please make sure the backend is running.');
    }
    
    throw new Error(error.message || 'Failed to analyze message. Please try again.');
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
export const analyzeMessage = async (message) => {
  try {
    if (!message || message.trim().length === 0) {
      throw new Error('Message cannot be empty');
    }

    // ✅ HuggingFace Space API URL
    const HF_API_URL = "https://sibghat7-urdu-phishguard.hf.space/predict"; // change if different

    // Real backend call
    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    return {
      classification: data.label === "PHISHING" ? "SCAM" : "SAFE",
      confidence: Math.round(data.confidence * 100),
      details:
        data.label === "PHISHING"
          ? "⚠️ Suspicious content detected. Please verify the sender."
          : "✅ This message appears safe.",
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error("Error analyzing message:", error);
    throw new Error("Failed to analyze message. Please try again.");
  }
};

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
