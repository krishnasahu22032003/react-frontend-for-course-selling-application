import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close on click
  };

  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, developed and maintained by Facebook."
    },
    {
      question: "How does React work?",
      answer: "React works by creating a virtual DOM and efficiently updating it when data changes, which results in a faster user experience."
    },
    {
      question: "What are React Hooks?",
      answer: "React hooks are functions that allow you to use state and other React features in functional components."
    },
    {
      question: "What is JSX in React?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to HTML, used in React to describe what the UI should look like."
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Frequently Asked Questions</h2>
      <div style={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            <div
              style={styles.question}
              onClick={() => toggleAnswer(index)} // Toggle answer visibility
            >
              <h3>{item.question}</h3>
              <span style={styles.arrow(openIndex === index)}>&#x2193;</span> {/* Arrow for toggling */}
            </div>
            <div
              style={{
                ...styles.answer,
                maxHeight: openIndex === index ? '200px' : '0', // Show/hide answer with transition
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#121212', // Dark background for the FAQ section
    padding: '40px 20px',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '50px auto',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    fontSize: '2rem',
    color: '#ffffff', // White text for heading
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  faqList: {
    listStyleType: 'none',
    padding: '0',
  },
  faqItem: {
    backgroundColor: '#1d1d1d', // Dark background for each FAQ item
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
  question: {
    backgroundColor: '#6200ea', // Purple color for question section
    color: 'white',
    padding: '20px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
  },
  answer: {
    padding: '0 20px',
    fontSize: '1rem',
    color: '#bbb', // Light gray text for the answer
    lineHeight: '1.6',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.4s ease',
  },
  arrow: (isOpen) => ({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  }),
};
