import React from 'react';
import './Projects.styles.css';

const Projects = () => {
  const cards = [
    {
      id: 1,
      title: 'Typewriter',
      content: 'Hell',
      subtitle: '100+ premium examples',
      desc: 'A growing collection of high-quality, ready-to-use examples for JavaScript, React and Vue.',
      locked: true
    },
    {
      id: 2,
      title: 'Rotate the square slower',
      content: '↻',
      subtitle: 'AI-powered editing',
      desc: "Open examples in Vercel’s v0 AI editor and tweak as needed.",
      buttonText: 'Rotate the square slower',
      locked: false
    },
    {
      id: 3,
      title: 'Motion+',
      content: '💎',
      subtitle: '',
      desc: '',
      locked: false
    },
    {
      id: 4,
      title: 'Engagement',
      content: '🔥',
      subtitle: '',
      desc: '',
      locked: false
    }
  ];

  return (
    <div className='Project'>

        <div className="feature-container">
        <h2>Advanced features</h2>
        <p className="description">
            Upgrade to Motion+ for lifetime access to premium APIs, early access to new features,
            and more.
        </p>
        <button className="upgrade-button">Upgrade to Motion+</button>

        <div className="grid-wrapper">
            {cards.map((card) => (
            <div className="feature-card" key={card.id}>
                <div className="card-header">
                <span>{card.title}</span>
                {card.locked && <button className="source-button">🔒 SOURCE</button>}
                </div>
                <div className="card-content">{card.content}</div>
                {card.subtitle && <h4 className="card-subtitle">{card.subtitle}</h4>}
                {card.desc && <p className="card-desc">{card.desc}</p>}
                {card.buttonText && (
                <button className="action-button">{card.buttonText} ⤴</button>
                )}
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Projects;
