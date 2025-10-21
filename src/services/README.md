# Services

This directory contains service modules for API communication and external integrations.

## Purpose

Services handle:
- API calls to the backend
- Data fetching and submission
- Error handling
- Response parsing

## Example Services

- `api.js` - Main API configuration
- `phishingService.js` - Phishing detection API calls
- `authService.js` - Authentication (if needed)

## Usage

```javascript
import { analyzeText } from './services/phishingService';

const result = await analyzeText(userInput);
```
