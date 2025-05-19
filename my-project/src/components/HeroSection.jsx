import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-synergy-blue/10 blur-3xl animate-float"></div>
        <div
          className="absolute top-20 right-20 w-60 h-60 rounded-full bg-synergy-orange/10 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-60 w-60 h-60 rounded-full bg-synergy-green/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">Connect.</span>{" "}
            <span className="gradient-text" style={{ animationDelay: "0.2s" }}>
              Create.
            </span>{" "}
            <span className="gradient-text" style={{ animationDelay: "0.4s" }}>
              Conquer.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Unleash the power of collaboration and teamwork with Synergy in
            Action. Connect with innovators, create breakthrough solutions, and
            conquer challenges together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="cta-button bg-synergy-gradient text-lg hover:shadow-lg hover:shadow-synergy-blue/20">
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { number: "500+", label: "Teams Connected" },
              { number: "2,500+", label: "Projects Created" },
              { number: "35,000+", label: "Challenges Conquered" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
