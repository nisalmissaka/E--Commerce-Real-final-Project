import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About StyleHub</h1>
          <p>Your Premier Online Fashion Destination in Sri Lanka</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Fashion Journey</h2>
              <p>
                Founded in 2018, StyleHub emerged from a simple idea: to make 
                quality fashion accessible to every Sri Lankan. What began as a 
                small online boutique has blossomed into Sri Lanka's favorite 
                online clothing store.
              </p>
              <p>
                We believe fashion should be effortless, enjoyable, and 
                expressive. Our carefully curated collections blend international 
                trends with Sri Lankan sensibilities, creating styles that 
                resonate with our diverse community.
              </p>
              <p>
                From casual everyday wear to elegant occasion outfits, we're 
                committed to helping you look and feel your best, no matter 
                where life takes you.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                alt="StyleHub Fashion Studio" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose StyleHub</h2>
            <p>Experience fashion shopping like never before</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3>Quality Fabrics</h3>
              <p>
                We source premium materials that ensure comfort, durability, 
                and style in every garment.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-ruler-combined"></i>
              </div>
              <h3>Perfect Fit</h3>
              <p>
                Detailed size guides and fit recommendations to help you 
                find your perfect match.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Islandwide Delivery</h3>
              <p>
                Fast, reliable delivery across Sri Lanka with flexible 
                return options.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Sustainable Fashion</h3>
              <p>
                Committed to eco-friendly practices and supporting local 
                artisans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collections */}
      <section className="collections-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Collections</h2>
            <p>Carefully curated for the modern Sri Lankan</p>
          </div>
          
          <div className="collections-grid">
            <div className="collection-card">
              <div className="collection-image">
                <img 
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                  alt="Men's Collection" 
                />
                <div className="collection-overlay">
                  <h4>Men's Fashion</h4>
                </div>
              </div>
              <p>
                From casual tees to formal wear, discover styles that define 
                modern masculinity.
              </p>
            </div>
            
            <div className="collection-card">
              <div className="collection-image">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                  alt="Women's Collection" 
                />
                <div className="collection-overlay">
                  <h4>Women's Fashion</h4>
                </div>
              </div>
              <p>
                Elegant dresses, comfortable casuals, and everything in 
                between for the contemporary woman.
              </p>
            </div>
            
            <div className="collection-card">
              <div className="collection-image">
                <img 
                  src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                  alt="Kids Collection" 
                />
                <div className="collection-overlay">
                  <h4>Kids & Teens</h4>
                </div>
              </div>
              <p>
                Colorful, comfortable, and durable clothing for the little 
                ones and trendy teens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="sustainability-section">
        <div className="container">
          <div className="sustainability-content">
            <div className="sustainability-image">
              <img 
                src="https://images.unsplash.com/photo-1603574670813-1d6c7c3497c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                alt="Sustainable Fashion" 
              />
            </div>
            <div className="sustainability-text">
              <h2>Our Commitment to Sustainability</h2>
              <p>
                At StyleHub, we believe fashion should be beautiful both 
                inside and out. That's why we're committed to sustainable 
                practices:
              </p>
              <ul className="sustainability-list">
                <li>
                  <i className="fas fa-leaf"></i>
                  <span>Eco-friendly packaging materials</span>
                </li>
                <li>
                  <i className="fas fa-recycle"></i>
                  <span>Recyclable and biodegradable materials</span>
                </li>
                <li>
                  <i className="fas fa-users"></i>
                  <span>Fair wages for all our artisans</span>
                </li>
                <li>
                  <i className="fas fa-tint"></i>
                  <span>Water-saving production techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Tips */}
      <section className="tips-section">
        <div className="container">
          <div className="section-header">
            <h2>Style Tips from Our Experts</h2>
            <p>Elevate your fashion game</p>
          </div>
          
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Seasonal Wardrobe</h3>
              <p>
                Learn how to transition your wardrobe through Sri Lanka's 
                tropical climate while staying stylish.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Mix & Match</h3>
              <p>
                Discover how to create multiple outfits from a few key 
                pieces in your wardrobe.
              </p>
            </div>
            
            <div className="tip-card">
              <h3>Care Instructions</h3>
              <p>
                Proper care tips to keep your clothes looking fresh and 
                new for longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Fashion Lovers</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Styles Available</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Local Designers</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Our Fashion Community</h2>
          <p>
            Subscribe to our newsletter for exclusive offers, style tips, 
            and new collection alerts
          </p>
          <div className="cta-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="cta-input"
            />
            <button className="cta-button">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;