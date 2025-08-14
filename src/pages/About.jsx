import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        illum nesciunt soluta saepe tempore cumque debitis temporibus dolores
        reiciendis excepturi dicta placeat enim quaerat, est adipisci, sunt
        tempora beatae animi, doloremque sapiente numquam exercitationem
        repellendus! Nemo exercitationem sequi recusandae possimus!
      </p>
    </>
  );
};

export default About;
