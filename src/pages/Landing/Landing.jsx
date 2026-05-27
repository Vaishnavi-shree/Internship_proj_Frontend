import "./Landing.css";

import { Link } from "react-router-dom";

import { useContext } from "react";

import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import { AuthContext } from "../../context/AuthContext";

const Landing = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">

          <h1>
            Prepare For Your Dream Career
          </h1>

          <p>
            Practice aptitude, coding and
            interview questions in one place.
          </p>

          
          {/* SHOW BUTTONS ONLY IF USER NOT LOGGED IN */}
          {!user && (
            <div className="hero-buttons">

              <Link to="/signup">
                <button>
                  Get Started
                </button>
              </Link>

              <Link to="/login">
                <button className="login-btn">
                  Login
                </button>
              </Link>

            </div>
          )}

        </div>
      </section>





      {/* FEATURES SECTION */}
      <section className="features">

        <h2>Portal Features</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Aptitude Practice</h3>

            <p>
              Practice aptitude questions topic wise.
            </p>
          </div>

          <div className="feature-card">
            <h3>Coding Questions</h3>

            <p>
              Learn DSA and development questions.
            </p>
          </div>

          <div className="feature-card">
            <h3>Interview Preparation</h3>

            <p>
              Prepare company interview questions.
            </p>
          </div>

        </div>
      </section>





      {/* ABOUT SECTION */}
      <section className="about">

        <h2>About Mini Career Portal</h2>

        <p>
          Mini Career Portal is a beginner-friendly
          preparation platform where students can
          practice aptitude, coding and interview
          questions easily.
        </p>

      </section>

      <Footer />
    </>
  );
};

export default Landing;