import React from "react";
import Navbar from "../components/Navbar";
import SpinWheel from "../components/CityScapes/SpinWheel";

const Cityscapes = () => {
  return (
    <div className="bg-black text-white min-h-screen font-Lato">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="text-center py-12 bg-tertiary">
        <h1 className="text-4xl font-Bebas text-primary">Cityscapes</h1>
        <p className="text-lg text-secondary mt-4">
          A collaborative event by <span className="text-primary">Anirveda</span> and{" "}
          <span className="text-primary">Respawn</span> 
        </p>
        <p className="text-base text-gray-400 mt-2">
          Explore the city, complete exciting challenges, and win amazing rewards!
        </p>
      </header>

      {/* Spin the Wheel Section */}
      <section className="py-16">
        <h2 className="text-3xl font-Bebas text-center text-primary mb-8">
          Spin the Wheel to Start a Game!
        </h2>
        <br />
        <br />
        <br />
        <div className="max-w-lg mx-auto">
          <SpinWheel />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tertiary py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Cityscapes Event. Powered by <span className="text-primary">Anirveda</span> and{" "}
          <span className="text-primary">Respawn</span> Clubs.
        </p>
      </footer>
    </div>
  );
};

export default Cityscapes;