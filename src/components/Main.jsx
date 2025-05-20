export default function Main() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '60px 20px',
      }}
    >
      <h1 style={{ fontSize: 50, marginBottom: 20 }}>
        Start Your Web and Web3 Journey with us
      </h1>

      <h3 style={{ fontSize: 25, maxWidth: 800, marginBottom: 40 }}>
        Join our courses and get firsthand knowledge about Web and Web3
      </h3>

      <button
        style={{
          padding: '12px 24px',
          backgroundColor: '#4F46E5',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#4338CA';
          e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#4F46E5';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
      >
        View Courses
      </button>

      <img
        src="https://framerusercontent.com/images/qbaa71s5cLRSPXsmySlR30nD9E.png"
        alt="Course Illustration"
        style={{ marginTop: 50, maxWidth: '90%', height: 'auto' }}
      />
    </div>
  );
}
