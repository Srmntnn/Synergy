import React from "react";

const TeamMember = ({ name, role, image, delay = 0 }) => {
  return (
    <div
      className="team-card animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-white/80">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
