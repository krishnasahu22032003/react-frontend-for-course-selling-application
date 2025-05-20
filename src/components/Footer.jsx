const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.about}>
          <h3 style={styles.heading}>About Us</h3>
          <p style={styles.text}>
            We are a company committed to providing quality service and bringing value to our clients. Join us in creating a better future.
          </p>
        </div>

        <div style={styles.quickLinks}>
          <h3 style={styles.heading}>Quick Links</h3>
          <p style={styles.text}>Home</p>
          <p style={styles.text}>About</p>
          <p style={styles.text}>Services</p>
          <p style={styles.text}>Contact</p>
        </div>

        <div style={styles.socialLinks}>
          <h3 style={styles.heading}>Follow Us</h3>
          <p style={styles.text}>GitHub</p>
          <p style={styles.text}>LinkedIn</p>
          <p style={styles.text}>Twitter</p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerText}>© 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;




const styles = {
  footer: {
    backgroundColor: '#121212', // Dark background
    color: '#fff', // White text
    padding: '40px 20px', // Padding around the footer
    textAlign: 'center',
    fontFamily: '"Roboto", sans-serif',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  about: {
    flex: '1 1 300px',
  },
  quickLinks: {
    flex: '1 1 300px',
  },
  socialLinks: {
    flex: '1 1 300px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#bbb',
    marginBottom: '8px',
  },
  footerBottom: {
    marginTop: '40px',
    borderTop: '1px solid #333',
    paddingTop: '20px',
  },
  footerText: {
    fontSize: '14px',
    color: '#bbb',
  }
};
