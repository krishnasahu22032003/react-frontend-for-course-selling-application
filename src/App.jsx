import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from "./components/Card";
import TestimonialCard from "./components/Testimonial";
import FAQSection from "./components/FAQsection";
import Footer from "./components/Footer";
function App() {

  return <div style={{ backgroundColor: "black", color: 'white' }}>
    <Navbar />
    <Main />
    <div style={{ fontSize: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>What You'll Learn with us</h1>
    </div>
    <div style={styles.cardContainer}>
      <Card
        image="https://images.unsplash.com/photo-1709099317886-13dff6d5982d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
      <Card
        image="https://images.unsplash.com/photo-1709099317886-13dff6d5982d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
      <Card
        image="https://images.unsplash.com/photo-1709099317886-13dff6d5982d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
      <Card
        image="https://images.unsplash.com/photo-1709099317886-13dff6d5982d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
      <Card
        image="https://images.unsplash.com/photo-1709099317886-13dff6d5982d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
    </div>
    <div style={{ fontSize: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Existing Co-horts</h1>
    </div>
    <div style={styles.cardContainer}>
      <Card
        image="https://images.unsplash.com/photo-1551914554-c94b92df45c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
      <Card
        image="https://images.unsplash.com/photo-1551914554-c94b92df45c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
      <Card
        image="https://images.unsplash.com/photo-1551914554-c94b92df45c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="cousre 1"
        description="This comprehensive course is designed for both beginners and intermediate learners who want to build modern web applications" />
    </div>
    <div style={{ fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Testimonials</h1>
    </div>
    <div style={styles.cardContainer}>
      <TestimonialCard
        image="https://randomuser.me/api/portraits/men/1.jpg"
        name="John Doe"
        role="Software Engineer"
        testimonial="This is an amazing product! It has really helped me improve my workflow."
        link="https://www.linkedin.com/in/johndoe/"
      />
      <TestimonialCard
        image="https://randomuser.me/api/portraits/women/2.jpg"
        name="Jane Smith"
        role="UX Designer"
        testimonial="I love the intuitive design and how easy it is to integrate with other tools."
        link="https://www.behance.net/janesmith"
      />
      <TestimonialCard
        image="https://randomuser.me/api/portraits/men/3.jpg"
        name="Sam Wilson"
        role="Project Manager"
        testimonial="A game-changer for our team! Highly recommend it to anyone working in tech."
        link="https://twitter.com/samwilson"
      />
      <TestimonialCard
        image="https://randomuser.me/api/portraits/men/3.jpg"
        name="Sam Wilson"
        role="Project Manager"
        testimonial="A game-changer for our team! Highly recommend it to anyone working in tech."
        link="https://twitter.com/samwilson"
      />
      <TestimonialCard
        image="https://randomuser.me/api/portraits/men/3.jpg"
        name="Sam Wilson"
        role="Project Manager"
        testimonial="A game-changer for our team! Highly recommend it to anyone working in tech."
        link="https://twitter.com/samwilson"
      />
    </div>
    <div style={{ fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2>FAQs</h2>
    </div>
    <FAQSection />
    <div>
      <Footer />
    </div>




  </div>
}
const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'center', // Align cards in the center horizontally
    alignItems: 'center', // Center the cards vertically
    flexWrap: 'wrap', // Allow wrapping if the screen is too small
    gap: '20px', // Add space between cards
    padding: '20px', // Add padding around the container
  },
};







export default App
