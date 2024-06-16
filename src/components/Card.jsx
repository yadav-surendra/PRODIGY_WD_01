import React from 'react'
import './style.css';

export const Card = () => {
  return (
    <>
      <div class="card myCard">
        <div class="card-body">
          <h5 class="card-title s-title">Jhon Smith</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Visual Designer</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae iusto, nobis officia animi provident culpa illo vitae quis? Amet itaque corporis sint ut suscipit incidunt repellendus inventore aspernatur mollitia!
          </p>
          <button className="myButton">Say Hello</button>
          <a  className="myWork" href="#">My Works ↗️ </a>
        </div>
      </div>
      
    </>
  );
};
