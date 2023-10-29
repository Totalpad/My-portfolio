import React, { useRef } from "react";
import "../styles/PhotoCard.css"; // Add the CSS styles here

const PhotoCard = ({ img, link }) => {
  const cardRef = useRef();

  const handleMouseLeave = () => {
    const card = cardRef.current;

    card.style.transform = `perspective(500px) scale(1)`;
  };

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    // Calculate relX and relY based on event.clientX and event.clientY
    const relX = (event.nativeEvent.offsetX + 1) / card.offsetWidth;
    const relY = (event.nativeEvent.offsetY + 1) / card.offsetHeight;

    // Calculate rotation values
    const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
    const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;

    // Apply transformations to the card
    card.style.transform = `perspective(500px) scale(1.3) ${rotY} ${rotX}`;
  };

  return (
   
      <img
        src={img}
        alt="Card"
        className="card"
        target="_blank"
        ref={cardRef}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
  
  );
};

export default PhotoCard;
