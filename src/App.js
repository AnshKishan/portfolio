import React from "react";
import "./styles.css"; // Add your custom CSS file
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="container" style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Poppins, Arial, sans-serif", padding: "20px" }}>
      {/* Hero Section */}
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ padding: "50px", borderRadius: "20px", background: "linear-gradient(90deg, #1db954, #1ed760)" }}
      >
        <h1 className="hero-title">Ansh Kishan</h1>
        <p className="hero-subtitle">Enthusiastic Computer Engineering Undergraduate | Passionate about Data Science, AI, and Game Development</p>
        <motion.a
          href="#contact"
          className="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ padding: "10px 20px", borderRadius: "30px", backgroundColor: "#fff", color: "#1db954", fontWeight: "bold", textDecoration: "none" }}
        >
          Contact Me
        </motion.a>
      </motion.header>

      {/* About Section */}
      <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          marginTop: "40px",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "#121212",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
>
  {/* Image Section */}
  <motion.img
    src="/IMG_7446.JPG" // Replace with the correct image path
    alt=""
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
    style={{
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      border: "3px solid #1db954",
      objectFit: "cover",
    }}
  />

  {/* Text Section */}
  <div>
    <h2 className="section-title">About Me</h2>
    <p className="section-description">
      I’m an aspiring computer engineer with a passion for data science and
      innovation, always eager to learn more. Skilled in Python, JavaScript,
      React, and R, I love diving into data to uncover insights and craft
      impactful solutions. Whether it’s building intelligent systems or
      exploring machine learning, I thrive on combining creativity and
      technology to make meaningful contributions.
    </p>
  </div>
</motion.section>


      {/* Projects Section */}
      <motion.section
        id="projects"
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginTop: "40px", padding: "30px", borderRadius: "20px", backgroundColor: "#121212" }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="project-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <motion.div
            className="project"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ padding: "20px", borderRadius: "15px", backgroundColor: "#1e1e1e" }}
          >
            <h3 className="project-title">AI-Based Crater Detection System</h3>
            <p className="project-description">Developed using Faster R-CNN techniques to analyze high-resolution lunar images from the Chandrayaan mission, significantly improving lunar surface mapping and exploration.</p>
            <a href="#" className="project-link" style={{ color: "#1db954", textDecoration: "none", fontWeight: "bold" }}>View on GitHub</a>
          </motion.div>

          <motion.div
            className="project"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ padding: "20px", borderRadius: "15px", backgroundColor: "#1e1e1e" }}
          >
            <h3 className="project-title">Crime Records Management System</h3>
            <p className="project-description">Built using Python and MySQL, this system provides efficient storage, retrieval, and analysis of crime data with a user-friendly interface for law enforcement.</p>
            <a href="#" className="project-link" style={{ color: "#1db954", textDecoration: "none", fontWeight: "bold" }}>Live Demo</a>
          </motion.div>

          <motion.div
            className="project"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ padding: "20px", borderRadius: "15px", backgroundColor: "#1e1e1e" }}
          >
            <h3 className="project-title">Deep Learning-Based Leaf Disease Diagnosis System</h3>
            <p className="project-description">Created using CNN models, this system accurately identifies plant diseases from images, aiding in early detection and agricultural management.</p>
            <a href="https://github.com/AnshKishan/Deep_Learning_based_Automated_leaf_Disease_Diagnosis_System" className="project-link" style={{ color: "#1db954", textDecoration: "none", fontWeight: "bold" }}>View Details</a>
          </motion.div>
        </div>
      </motion.section>

      {/* Research Section */}
      <motion.section
        id="research" className="research" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ marginTop: "40px", padding: "30px", borderRadius: "20px", backgroundColor: "#1db954" }} 
      >
        <h2 className="section-title">Research Publications (Published)</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "black", fontWeight: "bold" }}> Racial disparities in early postoperative proximal 
            humerus fracture outcomes: do minorities face longer operative times, extended hospital stays, and higher risks?</h3>
            <p><a href="https://doi.org/10.1177/17585732241299052" style={{ color: "blue", textDecoration: "none" }}>Published in Shoulder Elbow, 2024. </a></p>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "black", fontWeight: "bold" }}>Comparison of Physician 
            Compensation Using Work Relative Value Units in Septic Revision Total Shoulder Arthroplasty</h3>
            <p><a href="https://doi.org/10.1016/j.jorep.2024.100471" style={{ color: "blue", textDecoration: "none" }}>Published in J Orthopaedic Reports, 2024. </a></p>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "black", fontWeight: "bold" }}>Perioperative 
            complications and length of stay in patients with diabetes mellitus after aseptic revision total shoulder arthroplasty</h3>
            <p><a href="https://doi.org/10.1016/j.jorep.2024.100471" style={{ color: "blue", textDecoration: "none" }}>Published in J Orthopaedic Reports, 2024. </a></p>
          </li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.footer
        id="contact"
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginTop: "40px", padding: "30px", borderRadius: "20px", backgroundColor: "#121212", textAlign: "center" }}
      >
        <h2 className="section-title">Contact Me</h2>
        <p className="section-description">Feel free to reach out via email or connect on LinkedIn!</p>
        <div className="contact-links" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <motion.a
            href="mailto:anshkishan5@gmail.com"
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ padding: "10px 20px", borderRadius: "30px", backgroundColor: "#1db954", color: "#fff", fontWeight: "bold", textDecoration: "none" }}
          >
            Email Me
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ansh-kishan-23743a249/" target="_blank" rel="noopener noreferrer"
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ padding: "10px 20px", borderRadius: "30px", backgroundColor: "#1db954", color: "#fff", fontWeight: "bold", textDecoration: "none" }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/anshkishan" target="_blank" rel="noopener noreferrer"
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ padding: "10px 20px", borderRadius: "30px", backgroundColor: "#1db954", color: "#fff", fontWeight: "bold", textDecoration: "none" }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
