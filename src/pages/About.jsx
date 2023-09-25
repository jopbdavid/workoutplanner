import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Master your
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              CYCLES
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Achieving your fitness goals has never been easier. Our Workout Planner
        lets you set clear objectives, track your progress, and celebrate your
        successes. Whether you aim to build muscle, shed pounds, improve
        endurance, or enhance flexibility, we've got you covered.
      </p>
    </>
  );
};

export default About;
