import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [modalImage, setModalImage] = useState(null);
  const [modalInfo, setModalInfo] = useState({
    title: '',
    subtitle: '',
    description: '',
    link: '',
  });

  const openModal = (imgPath, info) => {
    setModalImage(imgPath);
    setModalInfo(info);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalInfo({ title: '', subtitle: '', description: '', link: '' });
  };

  return (
    <div className="projects-wrapper">
      <h4 className="projects-subtitle">WORKS</h4>
      <h2 className="projects-title">Latest Projects</h2>

      <div className="projects-grid asym-layout">
        <div
          className="project-item project-large"
          onClick={() =>
            openModal('/project3.png', {
              title: 'Pokédex Search + Favourites',
              subtitle: 'My Role and Contribution:',
              description: (
                <p>
                  I independently developed the entire JavaScript logic, from integrating the
                  PokéAPI to implementing interactive UI elements. I used <code>fetch()</code> for
                  asynchronous requests to enable real-time search and dynamically render Pokémon
                  cards with images, types, abilities, and base stats. I designed a modal for
                  detailed views and implemented a favorites feature using <code>localStorage</code>,
                  allowing users to switch between commonly viewed Pokémon. The UI and logic are
                  event-driven with DOM manipulation, enhanced by a loading spinner and dynamic type
                  badge coloring to improve user experience.
                </p>
              ),
              link: '/pokedex/index.html',
            })
          }
        >
          <img src="/project3.png" alt="Pokédex" />
          <div className="overlay">View</div>
        </div>

        <div
          className="project-item project-small"
          onClick={() =>
            openModal('/project2.png', {
              title: 'Word Guessing Game',
              subtitle: 'RMy Role and Contribution:',
              description: (
                <p>
                  I was responsible for the entire JavaScript logic of the word guessing game, implementing 
                  core gameplay, keyboard interaction, round management, and life tracking. I designed two 
                  modes: “Classic” and “10-Second Time Limit,” using event listeners, DOM manipulation, and 
                  setInterval for timing and feedback. I also handled UI updates and user prompts to ensure 
                  interactivity and playability. This project enhanced my skills in JavaScript state machines, 
                  array handling, and responsive UI design.
                </p>
              ),
              link: '/word-guessing-game/index.html',
            })
          }
        >
          <img src="/project2.png" alt="Word Game" />
          <div className="overlay">View</div>
        </div>

        <div
          className="project-item project-small"
          onClick={() =>
            openModal('/project1.png', {
              title: 'Traffic Light Simulator',
              subtitle: 'My Role and Contribution:',
              description: (
                <p>
                  I developed the complete JavaScript logic, implementing both manual and automatic traffic 
                  light controls. Using `addEventListener`, I managed light switching and built two modes: 
                  “Auto” and “Random.” I integrated DOM manipulation with `setInterval`/`clearInterval` for 
                  stable visual timing and improved user interaction. This project strengthened my skills in 
                  event-driven design and state transition logic.
                </p>
              ),
              link: '/traffic-light/index.html',
            })
          }
        >
          <img src="/project1.png" alt="Traffic Light" />
          <div className="overlay">View</div>
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image">
              <img src={modalImage} alt="Preview" />
            </div>
            <div className="modal-info">
              <h2>{modalInfo.title}</h2>
              <h3>{modalInfo.subtitle}</h3>
              <p>{modalInfo.description}</p>
              <a
                href={modalInfo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
              >
                View Project
              </a>
            </div>
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
