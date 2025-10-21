# Project Structure Documentation

## Overview

This document provides a comprehensive guide to the project's file and folder organization, explaining the purpose of each directory and key files.

## Directory Tree

```
urdu-phishing-detector-frontend/
│
├── public/                          # Static assets served directly
│   └── vite.svg                    # Vite logo
│
├── src/                             # Source code directory
│   │
│   ├── components/                  # Reusable UI Components
│   │   ├── Footer.jsx              # Legacy footer component
│   │   ├── Hero.jsx                # Legacy hero component
│   │   ├── InputForm.jsx           # Legacy input form component
│   │   ├── MainScreen.jsx          # ⭐ Main landing page (current)
│   │   ├── MainScreenImproved.jsx  # 🆕 Refactored version
│   │   ├── Navbar.jsx              # Legacy navbar (Bootstrap)
│   │   ├── ResultCard.jsx          # Legacy result display
│   │   ├── SharedFooter.jsx        # 🆕 Reusable footer component
│   │   ├── SharedNavbar.jsx        # 🆕 Reusable navbar component
│   │   └── StepIndicator.jsx       # Legacy step indicator
│   │
│   ├── pages/                       # Route-based Page Components
│   │   ├── About.jsx               # ⭐ About page (current)
│   │   ├── AboutImproved.jsx       # 🆕 Refactored version
│   │   ├── Contact.jsx             # ⭐ Contact page (current)
│   │   ├── Docs.jsx                # Documentation page (legacy)
│   │   ├── Home.jsx                # Legacy home page
│   │   ├── Privacy.jsx             # ⭐ Privacy policy page
│   │   └── Terms.jsx               # ⭐ Terms of use page
│   │
│   ├── services/                    # External Service Integration
│   │   ├── api.js                  # Legacy API service
│   │   └── apiService.js           # 🆕 Improved API layer
│   │
│   ├── hooks/                       # 🆕 Custom React Hooks
│   │   └── index.js                # Form, async, hover, focus hooks
│   │
│   ├── utils/                       # 🆕 Utility Functions
│   │   └── helpers.js              # Common helper functions
│   │
│   ├── constants/                   # 🆕 Application Constants
│   │   ├── theme.js                # Theme configuration (colors, fonts, etc.)
│   │   └── config.js               # App configuration (team info, routes, etc.)
│   │
│   ├── assets/                      # Static Assets (images, fonts)
│   │   └── react.svg               # React logo
│   │
│   ├── App.jsx                      # ⭐ Main application component with routing
│   ├── App.css                      # Legacy global styles
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global CSS styles
│
├── node_modules/                    # Dependencies (git-ignored)
│
├── .gitignore                       # Git ignore rules
├── CODE_STANDARDS.md                # 🆕 Code quality guidelines
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Locked dependency versions
├── README.md                        # Project documentation
└── vite.config.js                   # Vite bundler configuration
```

## Legend

- ⭐ **Currently in use**: Active production files
- 🆕 **New architecture**: Improved, corporate-standard files
- No icon: Legacy or supporting files

## Directory Details

### `/src/components/`

Reusable UI components that can be used across multiple pages.

#### Current Production Components

- **MainScreen.jsx**
  - Primary landing page with phishing detector
  - Contains form, step indicators, and result display
  - Manages multi-step analysis workflow
  - Direct inline navbar (to be replaced with SharedNavbar)

#### New Architecture Components

- **SharedNavbar.jsx**
  - Reusable navigation bar for all pages
  - Auto-detects active route
  - Consistent hover effects
  - Uses theme constants
  
- **SharedFooter.jsx**
  - Reusable footer component
  - Consistent copyright and messaging
  - Accepts optional additional text

- **MainScreenImproved.jsx**
  - Refactored version of MainScreen
  - Uses new hooks and service layer
  - Better separation of concerns
  - Includes SharedNavbar and SharedFooter

#### Legacy Components (to be phased out)

- Navbar.jsx - Old Bootstrap-based navbar
- Footer.jsx - Old footer component
- Hero.jsx - Old hero section
- InputForm.jsx - Old input form
- ResultCard.jsx - Old result display
- StepIndicator.jsx - Old step indicators

### `/src/pages/`

Route-based components representing full pages.

#### Current Production Pages

- **About.jsx** - Team and project information
- **Contact.jsx** - Contact form and team contact details
- **Privacy.jsx** - Privacy policy and data practices
- **Terms.jsx** - Terms of use and legal information

Each page currently has its own navbar/footer (inline). Migration to SharedNavbar/SharedFooter recommended.

#### New Architecture Pages

- **AboutImproved.jsx**
  - Refactored About page
  - Uses SharedNavbar and SharedFooter
  - Implements theme constants
  - Better code organization

### `/src/services/`

External API and service integrations.

- **api.js** (legacy)
  - Old API service
  
- **apiService.js** 🆕
  - Modern API service layer
  - Mock API for development
  - Production-ready with error handling
  - Functions:
    - `analyzeMessage()` - Phishing detection API
    - `submitContactForm()` - Contact form submission

### `/src/hooks/`

Custom React hooks for reusable logic.

- **index.js**
  - `useForm()` - Form state management
  - `useAsync()` - Async operation handling
  - `useHover()` - Hover state management
  - `useFocus()` - Focus state management
  - `useMediaQuery()` - Responsive breakpoint detection

### `/src/utils/`

General utility functions.

- **helpers.js**
  - `isValidEmail()` - Email validation
  - `containsUrdu()` - Urdu character detection
  - `truncateText()` - Text truncation
  - `formatConfidence()` - Confidence score formatting
  - `delay()` - Promise-based delay
  - `safeJSONParse()` - Safe JSON parsing
  - `generateId()` - Unique ID generation
  - `debounce()` - Function debouncing
  - `isDevelopment()` - Environment detection

### `/src/constants/`

Application-wide constants and configuration.

- **theme.js**
  - `COLORS` - Color palette
  - `TYPOGRAPHY` - Font settings
  - `SPACING` - Spacing scale
  - `BORDER_RADIUS` - Border radius values
  - `TRANSITIONS` - Animation timings
  - `BREAKPOINTS` - Responsive breakpoints
  - `Z_INDEX` - Z-index layers

- **config.js**
  - `APP_CONFIG` - App metadata and settings
  - `ROUTES` - Route path constants
  - `NAV_ITEMS` - Navigation menu items
  - `FOOTER_TEXT` - Footer content

## File Purpose Matrix

| File Type | Current Location | New Architecture | Purpose |
|-----------|-----------------|------------------|---------|
| Navigation | Inline in each page | `SharedNavbar.jsx` | Consistent navigation |
| Footer | Inline in each page | `SharedFooter.jsx` | Consistent footer |
| API Calls | Inline in components | `apiService.js` | Centralized API logic |
| Form State | `useState` in components | `useForm` hook | Reusable form logic |
| Styling | Magic numbers inline | `theme.js` constants | Consistent theming |
| Config | Hardcoded strings | `config.js` | Central configuration |

## Migration Path

### Phase 1: Foundation (✅ Complete)
- [x] Create constants (theme.js, config.js)
- [x] Create utility functions
- [x] Create custom hooks
- [x] Create service layer
- [x] Create SharedNavbar and SharedFooter

### Phase 2: Component Refactoring (In Progress)
- [ ] Replace inline navbars with SharedNavbar
- [ ] Replace inline footers with SharedFooter
- [ ] Migrate MainScreen to MainScreenImproved
- [ ] Update all pages to use theme constants

### Phase 3: Cleanup (Future)
- [ ] Remove legacy components
- [ ] Remove magic numbers
- [ ] Add PropTypes to all components
- [ ] Add comprehensive JSDoc comments

### Phase 4: Enhancement (Future)
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Add CI/CD pipeline
- [ ] Add error boundary components

## Import Examples

### Using Theme Constants
```javascript
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';

const styles = {
  button: {
    background: COLORS.primary,
    fontSize: TYPOGRAPHY.fontSize.base,
    padding: SPACING.md,
  },
};
```

### Using Config Constants
```javascript
import { APP_CONFIG, ROUTES, NAV_ITEMS } from '../constants/config';

console.log(APP_CONFIG.name); // 'Urdu Phishing Detector'
console.log(ROUTES.about); // '/about'
```

### Using Shared Components
```javascript
import SharedNavbar from '../components/SharedNavbar';
import SharedFooter from '../components/SharedFooter';

const MyPage = () => (
  <>
    <SharedNavbar activeRoute="/about" />
    {/* Page content */}
    <SharedFooter />
  </>
);
```

### Using Custom Hooks
```javascript
import { useForm, useAsync } from '../hooks';

const MyComponent = () => {
  const { values, handleChange, errors } = useForm({ email: '' });
  const { loading, execute } = useAsync();
  
  // Use hooks...
};
```

### Using Utilities
```javascript
import { isValidEmail, formatConfidence } from '../utils/helpers';

const email = 'test@example.com';
if (isValidEmail(email)) {
  console.log('Valid!');
}

console.log(formatConfidence(94.5)); // '94.5%'
```

### Using Services
```javascript
import { analyzeMessage, submitContactForm } from '../services/apiService';

const result = await analyzeMessage('Message text');
const response = await submitContactForm({ name, email, message });
```

## Best Practices

1. **Use constants instead of magic numbers**
   - ✅ `padding: SPACING.md`
   - ❌ `padding: 16`

2. **Import from services layer**
   - ✅ `import { analyzeMessage } from '../services/apiService'`
   - ❌ `fetch('/api/analyze')`

3. **Use custom hooks for logic**
   - ✅ `const { values, handleChange } = useForm()`
   - ❌ `const [name, setName] = useState(); const [email, setEmail] = useState()`

4. **Use shared components**
   - ✅ `<SharedNavbar />`
   - ❌ Duplicate navbar code in each file

5. **Use utility functions**
   - ✅ `if (isValidEmail(email))`
   - ❌ `if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))`

## Questions?

Refer to:
- `CODE_STANDARDS.md` for coding guidelines
- `README.md` for setup and deployment
- Team contacts in `src/constants/config.js`
