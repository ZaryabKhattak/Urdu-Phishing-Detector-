# Code Standards & Best Practices

## Table of Contents
- [File Organization](#file-organization)
- [Naming Conventions](#naming-conventions)
- [Component Structure](#component-structure)
- [Styling Guidelines](#styling-guidelines)
- [State Management](#state-management)
- [Error Handling](#error-handling)
- [Performance](#performance)
- [Documentation](#documentation)

## File Organization

### Directory Structure
```
src/
├── components/       # Reusable UI components
├── pages/           # Route-based page components
├── services/        # API and external services
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── constants/       # App-wide constants
└── assets/          # Static assets (images, fonts)
```

### File Naming
- **Components**: PascalCase (e.g., `SharedNavbar.jsx`)
- **Utilities**: camelCase (e.g., `helpers.js`)
- **Constants**: camelCase (e.g., `theme.js`, `config.js`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useForm.js`)

## Naming Conventions

### Variables & Functions
```javascript
// ✅ Good
const userName = 'John';
const isActive = true;
const handleSubmit = () => {};
const getUserData = async () => {};

// ❌ Bad
const user_name = 'John';
const active = true;
const submit = () => {};
const get_user_data = async () => {};
```

### Constants
```javascript
// ✅ Good - Use UPPER_SNAKE_CASE for true constants
const MAX_RETRY_ATTEMPTS = 3;
const API_TIMEOUT = 30000;

// ✅ Good - Use PascalCase for config objects
const COLORS = { primary: '#009d8d' };

// ❌ Bad
const max_retry_attempts = 3;
const ApiTimeout = 30000;
```

### Components
```javascript
// ✅ Good - PascalCase, descriptive names
const SharedNavbar = () => {};
const UserProfileCard = () => {};

// ❌ Bad
const navbar = () => {};
const profile = () => {};
```

## Component Structure

### Standard Template
```javascript
/**
 * Component Description
 * Detailed explanation of what this component does
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Title text
 * @param {Function} props.onSubmit - Submit handler
 */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPOGRAPHY } from '../constants/theme';

const ComponentName = ({ title, onSubmit }) => {
  // 1. State declarations
  const [value, setValue] = useState('');

  // 2. Event handlers (use useCallback for optimization)
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // 3. Computed values
  const isValid = value.length > 0;

  // 4. Styles object
  const styles = {
    container: {
      padding: 16,
      background: COLORS.background.primary,
    },
  };

  // 5. Render
  return (
    <div style={styles.container}>
      {/* Component content */}
    </div>
  );
};

// PropTypes validation
ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

// Default props (if needed)
ComponentName.defaultProps = {
  title: 'Default Title',
};

export default ComponentName;
```

### Component Organization Order
1. Imports
2. Component function
3. State declarations
4. Hooks (useEffect, custom hooks)
5. Event handlers
6. Computed values
7. Styles
8. Return/Render
9. PropTypes
10. Default props
11. Export

## Styling Guidelines

### Use Theme Constants
```javascript
// ✅ Good
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';

const styles = {
  button: {
    background: COLORS.primary,
    fontSize: TYPOGRAPHY.fontSize.base,
    padding: SPACING.md,
  },
};

// ❌ Bad
const styles = {
  button: {
    background: '#009d8d',
    fontSize: 15,
    padding: 16,
  },
};
```

### Responsive Design
```javascript
const styles = {
  container: {
    padding: SPACING.lg,
    maxWidth: 1200,
    margin: '0 auto',
    '@media (max-width: 768px)': {
      padding: SPACING.md,
    },
  },
};
```

### Inline Styles Structure
```javascript
// ✅ Good - Organized, readable
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.md,
  },
  header: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    color: COLORS.black,
  },
};

// ❌ Bad - Directly in JSX
<div style={{ display: 'flex', gap: 16, padding: 24 }}>
```

## State Management

### Use Appropriate Hooks
```javascript
// ✅ Good - useState for simple state
const [count, setCount] = useState(0);

// ✅ Good - useCallback for event handlers
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);

// ✅ Good - useMemo for expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

### State Updates
```javascript
// ✅ Good - Functional updates
setCount(prev => prev + 1);
setUser(prev => ({ ...prev, name: 'John' }));

// ❌ Bad - Direct state mutation
count++;
user.name = 'John';
```

## Error Handling

### Try-Catch Blocks
```javascript
// ✅ Good
const fetchData = async () => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data. Please try again.');
  }
};
```

### User-Friendly Messages
```javascript
// ✅ Good
throw new Error('Failed to save. Please check your connection.');

// ❌ Bad
throw new Error('ERR_500: Internal server error');
```

## Performance

### Optimize Re-renders
```javascript
// ✅ Good - Memoized callback
const handleSubmit = useCallback(() => {
  // Handler logic
}, [dependency]);

// ✅ Good - Memoized component
const MemoizedChild = React.memo(ChildComponent);
```

### Lazy Loading
```javascript
// ✅ Good - Code splitting
const About = React.lazy(() => import('./pages/About'));

<Suspense fallback={<Loading />}>
  <About />
</Suspense>
```

## Documentation

### JSDoc Comments
```javascript
/**
 * Validates email address format
 * 
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid, false otherwise
 * @example
 * isValidEmail('test@example.com') // returns true
 * isValidEmail('invalid') // returns false
 */
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
```

### Component Documentation
```javascript
/**
 * User Profile Card Component
 * 
 * Displays user information in a card format with avatar,
 * name, email, and action buttons.
 * 
 * @component
 * @param {Object} props
 * @param {Object} props.user - User object
 * @param {string} props.user.name - User's full name
 * @param {string} props.user.email - User's email address
 * @param {Function} props.onEdit - Callback when edit is clicked
 * 
 * @example
 * <UserProfileCard 
 *   user={{ name: 'John', email: 'john@example.com' }}
 *   onEdit={handleEdit}
 * />
 */
```

### Inline Comments
```javascript
// ✅ Good - Explain WHY, not WHAT
// Use debounce to prevent API spam during rapid typing
const debouncedSearch = debounce(searchAPI, 300);

// ❌ Bad - Obvious comment
// Set the value to empty string
setValue('');
```

## Testing Guidelines

### Component Tests
```javascript
// Example structure (when tests are added)
describe('SharedNavbar', () => {
  it('renders all navigation items', () => {
    // Test implementation
  });

  it('highlights active route', () => {
    // Test implementation
  });
});
```

## Git Commit Messages

### Format
```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples
```bash
# ✅ Good
feat: add email validation to contact form

Added regex-based email validation with user feedback.
Shows error message when invalid format detected.

Closes #123

# ❌ Bad
updated stuff
```

## Code Review Checklist

- [ ] Code follows naming conventions
- [ ] Components have PropTypes validation
- [ ] JSDoc comments are comprehensive
- [ ] No hardcoded values (use constants)
- [ ] Error handling is implemented
- [ ] Code is performant (memoization where needed)
- [ ] Responsive design considered
- [ ] Accessibility (a11y) guidelines followed
- [ ] No console.logs in production code
- [ ] Git commit messages are descriptive

## Accessibility (a11y)

### Semantic HTML
```javascript
// ✅ Good
<nav>
  <button onClick={handleClick}>Submit</button>
</nav>

// ❌ Bad
<div>
  <div onClick={handleClick}>Submit</div>
</div>
```

### ARIA Labels
```javascript
// ✅ Good
<button aria-label="Close modal" onClick={onClose}>
  ×
</button>

<input 
  aria-label="Search messages" 
  placeholder="Search..."
/>
```

## Security Best Practices

### Input Sanitization
```javascript
// Always validate and sanitize user input
const sanitizedInput = input.trim().replace(/<script>/gi, '');
```

### Avoid Inline JavaScript
```javascript
// ✅ Good
<button onClick={handleClick}>Click</button>

// ❌ Bad
<button onclick="handleClick()">Click</button>
```

---

**Remember**: Write code for humans first, machines second. Code is read more than it's written.
