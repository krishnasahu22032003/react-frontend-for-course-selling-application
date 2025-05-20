

export default function Card({ image, title, description }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={image} alt="Card Visual" style={styles.image} />
        <div style={styles.overlay}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  card: {
    position: 'relative',
    width: '320px',
    height: '200px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the image covers the entire card
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.3))',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    boxSizing: 'border-box',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  description: {
    marginTop: '8px',
    fontSize: '0.95rem',
    color: '#ddd',
  },
};
