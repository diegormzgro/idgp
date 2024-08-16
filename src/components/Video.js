import React from "react";

function Video(props) {
  return (
    <div className="d-flex justify-content-center align-items-center mb-5 mt-2">
      <iframe
        width="357"
        height="635"
        src="https://www.youtube.com/embed/svieJLveX1A"
        title="Ciclo de cursos temáticos sobre la gestión pública"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
