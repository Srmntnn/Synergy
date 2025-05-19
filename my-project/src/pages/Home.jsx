import React from "react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import {
  Users,
  MessageSquare,
  Rocket,
  TrendingUp,
  Handshake,
  Award,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Users,
      iconBgColor: "bg-synergy-blue",
      title: "Connect",
      description:
        "Build meaningful connections with collaborators and innovators who share your vision and complement your skills.",
    },
    {
      icon: MessageSquare,
      iconBgColor: "bg-synergy-orange",
      title: "Communicate",
      description:
        "Exchange ideas seamlessly with real-time messaging, video conferencing, and collaborative whiteboards.",
    },
    {
      icon: Rocket,
      iconBgColor: "bg-synergy-green",
      title: "Create",
      description:
        "Transform ideas into reality with powerful collaborative tools designed for efficient teamwork and innovation.",
    },
    {
      icon: TrendingUp,
      iconBgColor: "bg-synergy-blue-dark",
      title: "Scale",
      description:
        "Grow your projects from concept to completion with scalable workflows and resource management.",
    },
    {
      icon: Handshake,
      iconBgColor: "bg-synergy-orange-dark",
      title: "Collaborate",
      description:
        "Work together across distances and time zones with synchronized tools and centralized project management.",
    },
    {
      icon: Award,
      iconBgColor: "bg-synergy-green-dark",
      title: "Conquer",
      description:
        "Overcome challenges and achieve goals through the combined strength of diverse perspectives and talents.",
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Synergy Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform brings together the essential elements of successful
              collaboration, enabling teams to achieve more together than they
              ever could alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                iconBgColor={feature.iconBgColor}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;
