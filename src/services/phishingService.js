import api from './api';

/**
 * Analyze text for phishing content
 * @param {string} text - The text to analyze
 * @returns {Promise} - Analysis result
 */
export const analyzeText = async (text) => {
  try {
    const response = await api.post('/analyze', { text });
    return response.data;
  } catch (error) {
    console.error('Error analyzing text:', error);
    throw error;
  }
};

/**
 * Check backend health
 * @returns {Promise} - Health status
 */
export const checkHealth = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('Error checking health:', error);
    throw error;
  }
};
