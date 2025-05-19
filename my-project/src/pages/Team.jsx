import React from "react";
import TeamSection from "@/components/TeamSection";

const Team = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals behind Synergy. Our diverse team
            brings together expertise from various fields to create a platform
            that truly empowers collaboration.
          </p>
        </div>

        <TeamSection />
      </div>
    </div>
  );
};

export default Team;
