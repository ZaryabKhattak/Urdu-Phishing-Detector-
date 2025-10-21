/**
 * About Page - Improved Version
 * Information about the project, team, and technology
 * 
 * @page
 */

import React from 'react';
import SharedNavbar from '../components/SharedNavbar';
import SharedFooter from '../components/SharedFooter';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '../constants/theme';
import { APP_CONFIG, ROUTES } from '../constants/config';

const AboutImproved = () => {
  const styles = {
    container: {
      background: COLORS.background.primary,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: 1,
      padding: `${SPACING['3xl']}px ${SPACING['2xl']}px`,
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
    },
    hero: {
      textAlign: 'center',
      marginBottom: SPACING['3xl'],
    },
    title: {
      fontFamily: TYPOGRAPHY.fontFamily.primary,
      fontSize: TYPOGRAPHY.fontSize['5xl'],
      fontWeight: TYPOGRAPHY.fontWeight.bold,
      color: COLORS.black,
      marginBottom: SPACING.md,
      letterSpacing: -1,
    },
    subtitle: {
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.xl,
      color: COLORS.gray[500],
      maxWidth: 700,
      margin: '0 auto',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: SPACING.lg,
      marginBottom: SPACING['3xl'],
    },
    featureCard: {
      background: COLORS.background.secondary,
      padding: SPACING.xl,
      borderRadius: BORDER_RADIUS.lg,
      textAlign: 'center',
    },
    featureIcon: {
      fontSize: 40,
      marginBottom: SPACING.md,
    },
    featureTitle: {
      fontFamily: TYPOGRAPHY.fontFamily.primary,
      fontSize: TYPOGRAPHY.fontSize.lg,
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      marginBottom: SPACING.sm,
    },
    featureDesc: {
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.sm,
      color: COLORS.gray[500],
      lineHeight: 1.6,
    },
    section: {
      marginBottom: SPACING['3xl'],
    },
    sectionTitle: {
      fontFamily: TYPOGRAPHY.fontFamily.primary,
      fontSize: TYPOGRAPHY.fontSize['3xl'],
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      marginBottom: SPACING.lg,
    },
    sectionContent: {
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.base,
      color: COLORS.gray[500],
      lineHeight: 1.8,
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: SPACING.xl,
    },
    teamCard: {
      background: COLORS.background.secondary,
      padding: SPACING.xl,
      borderRadius: BORDER_RADIUS.lg,
    },
    teamName: {
      fontFamily: TYPOGRAPHY.fontFamily.primary,
      fontSize: TYPOGRAPHY.fontSize.xl,
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      marginBottom: SPACING.xs,
    },
    teamRole: {
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.base,
      color: COLORS.primary,
      marginBottom: SPACING.md,
    },
    teamDesc: {
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.sm,
      color: COLORS.gray[500],
      lineHeight: 1.6,
    },
    linkedin: {
      display: 'inline-block',
      marginTop: SPACING.md,
      color: COLORS.primary,
      textDecoration: 'none',
      fontSize: TYPOGRAPHY.fontSize.sm,
    },
    disclaimer: {
      background: COLORS.warning,
      padding: SPACING.lg,
      borderRadius: BORDER_RADIUS.md,
      borderLeft: `4px solid ${COLORS.warningText}`,
    },
    disclaimerTitle: {
      fontFamily: TYPOGRAPHY.fontFamily.primary,
      fontSize: TYPOGRAPHY.fontSize.md,
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      color: COLORS.warningText,
      marginBottom: SPACING.sm,
    },
    disclaimerText: {
      fontFamily: TYPOGRAPHY.fontFamily.secondary,
      fontSize: TYPOGRAPHY.fontSize.sm,
      color: COLORS.warningText,
      lineHeight: 1.6,
    },
  };

  const features = [
    {
      icon: '🔒',
      title: 'Secure Analysis',
      description: 'Your messages are analyzed securely and never stored or logged.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get results in under 3 seconds with our optimized AI model.',
    },
    {
      icon: '🛡️',
      title: 'Privacy First',
      description: 'No data collection, no tracking, no cookies. Your privacy matters.',
    },
  ];

  return (
    <div style={styles.container}>
      <SharedNavbar activeRoute={ROUTES.about} />
      
      <div style={styles.content}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <h1 style={styles.title}>About Urdu Phishing Detector</h1>
          <p style={styles.subtitle}>
            Empowering users with AI-driven protection against phishing attempts
            in Urdu text messages
          </p>
        </div>

        {/* Features */}
        <div style={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionContent}>
            To provide accessible, AI-powered protection for Urdu-speaking communities
            against increasingly sophisticated phishing attacks. We believe everyone
            deserves security tools in their native language.
          </p>
        </div>

        {/* Team */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet the Team</h2>
          <div style={styles.teamGrid}>
            <div style={styles.teamCard}>
              <h3 style={styles.teamName}>{APP_CONFIG.team.founder.name}</h3>
              <div style={styles.teamRole}>{APP_CONFIG.team.founder.title}</div>
              <p style={styles.teamDesc}>{APP_CONFIG.team.founder.description}</p>
              <a
                href={APP_CONFIG.team.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkedin}
              >
                Connect on LinkedIn →
              </a>
            </div>
            <div style={styles.teamCard}>
              <h3 style={styles.teamName}>{APP_CONFIG.team.coFounder.name}</h3>
              <div style={styles.teamRole}>{APP_CONFIG.team.coFounder.title}</div>
              <p style={styles.teamDesc}>{APP_CONFIG.team.coFounder.description}</p>
              <a
                href={APP_CONFIG.team.coFounder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkedin}
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={styles.disclaimer}>
          <h3 style={styles.disclaimerTitle}>⚠️ Important Disclaimer</h3>
          <p style={styles.disclaimerText}>
            This tool is designed to assist in identifying potential phishing attempts
            but cannot guarantee 100% accuracy. Always exercise caution with suspicious
            messages and verify senders through official channels before taking any action.
          </p>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
};

export default AboutImproved;
