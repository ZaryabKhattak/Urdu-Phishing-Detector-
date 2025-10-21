import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COLORS, TYPOGRAPHY, SPACING, TRANSITIONS } from '../constants/theme';
import { APP_CONFIG, NAV_ITEMS } from '../constants/config';

/**
 * Shared Navigation Bar Component
 * Provides consistent navigation across all pages with active state indication
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.activeRoute] - Currently active route (optional, auto-detected)
 */
const SharedNavbar = ({ activeRoute }) => {
  const location = useLocation();
  const currentPath = activeRoute || location.pathname;

  const [hoveredItem, setHoveredItem] = useState(null);

  const styles = {
    nav: {
      background: COLORS.background.secondary,
      borderBottom: `1px solid ${COLORS.gray[100]}`,
      padding: `0 ${SPACING['2xl']}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64,
    },
    logo: {
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      fontFamily: TYPOGRAPHY.fontFamily.primary,
      fontSize: TYPOGRAPHY.fontSize.md,
      color: COLORS.black,
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: SPACING.xl,
      alignItems: 'center',
    },
    navLink: (path) => ({
      color: COLORS.black,
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.base,
      textDecoration: 'none',
      paddingBottom: SPACING.xs,
      borderBottom: `3px solid ${currentPath === path ? COLORS.primary : 'transparent'}`,
      transition: `border-color ${TRANSITIONS.normal}`,
    }),
  };

  const handleMouseEnter = (path) => setHoveredItem(path);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        {APP_CONFIG.name}
      </Link>
      <div style={styles.navLinks}>
        {NAV_ITEMS.map((item) => {
          const isActive = currentPath === item.path;
          const isHovered = hoveredItem === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.navLink(item.path),
                borderBottomColor: isActive 
                  ? COLORS.primary 
                  : isHovered 
                  ? COLORS.primary 
                  : 'transparent',
              }}
              onMouseEnter={() => handleMouseEnter(item.path)}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

SharedNavbar.propTypes = {
  activeRoute: PropTypes.string,
};

SharedNavbar.defaultProps = {
  activeRoute: null,
};

export default SharedNavbar;
