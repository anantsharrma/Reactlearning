import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-[85vh] overflow-hidden bg-black flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[130px]"></div>

      <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[150px]"></div>

      {/* Floating 404 */}
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black text-white/5 animate-float pointer-events-none -z-10">
        404
        </h1>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/30 animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Main Card */}
      <div className="relative z-10 text-center">

        {/* Compass */}
        <div className="mx-auto mb-10 flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl">

          <div className="relative h-28 w-28 rounded-full border-2 border-white/20">

    <div className="relative h-28 w-28 rounded-full border-2 border-white/20">

            {/* Rotating Needle */}
            <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute left-1/2 top-1/2 w-1 h-16 -translate-x-1/2 -translate-y-full bg-cyan-400 rounded-full origin-bottom"></div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>

            {/* Directions */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-white/60">N</div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white/60">S</div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-white/60">W</div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white/60">E</div>

            </div>
          </div>
        </div>

        <h2 className="mb-4 text-5xl font-bold">
          Lost in Space
        </h2>

        <p className="mx-auto max-w-xl text-lg text-gray-400">
          The page you're looking for drifted into another galaxy.
          Let's get you back on course.
        </p>

        <Link
          to="/"
          className="group mt-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-8 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black"
        >
          ← Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;