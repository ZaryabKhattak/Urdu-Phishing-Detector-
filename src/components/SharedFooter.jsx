import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';
import { FOOTER_TEXT } from '../constants/config';

/**
 * Shared Footer Component
 * Provides consistent footer across all pages
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.additionalText] - Optional additional text to display
 */
const SharedFooter = ({ additionalText }) => {
  const styles = {
    footer: {
      background: COLORS.background.secondary,
      borderTop: `1px solid ${COLORS.gray[100]}`,
      padding: `${SPACING.lg}px ${SPACING['2xl']}px`,
      marginTop: 'auto',
    },
    text: {
      textAlign: 'center',
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.sm,
      color: COLORS.gray[500],
      lineHeight: 1.6,
      margin: 0,
    },
    copyright: {
      marginTop: SPACING.sm,
    },
  };

  return (
    <footer style={styles.footer}>
      {additionalText && (
        <p style={styles.text}>{additionalText}</p>
      )}
      <p style={styles.text}>
        {FOOTER_TEXT.main}
      </p>
      <p style={{ ...styles.text, ...styles.copyright }}>
        {FOOTER_TEXT.copyright}
      </p>
    </footer>
  );
};

SharedFooter.propTypes = {
  additionalText: PropTypes.string,
};

SharedFooter.defaultProps = {
  additionalText: null,
};

export default SharedFooter;
