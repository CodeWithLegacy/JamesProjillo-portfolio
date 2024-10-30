import React from 'react';

const Hero = () => {
  return (
    <section className = "heroBox" id="hero">
            <div className="textHero">
                <p>
                    Hi! I'ts Me
                      <h1>James Bendict Projillo</h1>
                    <p>and I am a 
                      <span className="hero-span">
                        &nbsp;&nbsp;Information Technology Student
                      </span>
                    </p>
                </p>
            </div>
        <img src="james.png" alt="David Roem Macul Dumalag" style={{ width: '370px', height: 'auto' }} />
    </section>
  );
};

export default Hero;