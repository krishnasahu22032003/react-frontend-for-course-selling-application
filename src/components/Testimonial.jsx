
export default function TestimonialCard({ image, name, role, testimonial, link }) {
  return (
    <div
      style={styles.card}
      onClick={() => window.location.href = link} // Redirect to the provided link
    >
      <img src={image} alt="Profile" style={styles.image} />
      <div style={styles.textContainer}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.role}>{role}</p>
        <p style={styles.testimonial}>{testimonial}</p>
      </div>
    </div>
  );
}

// Inline styles for the testimonial card.
const styles = {
card: {
    width: '280px',
    backgroundColor: '#2b2b2b',
    color: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '20px',
    margin: '20px',
    position: 'relative',
    ':hover': {
      transform: 'scale(1.05)', // Slight zoom on hover
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)', // Increased shadow on hover
    },
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  textContainer: {
    padding: '0 10px',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  role: {
    fontSize: '1rem',
    color: '#ccc',
    marginBottom: '15px',
  },
  testimonial: {
    fontSize: '1rem',
    color: '#ddd',
    fontStyle: 'italic',
  },
};
