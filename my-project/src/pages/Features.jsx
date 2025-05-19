import React from "react";
import {
  Users,
  MessageSquare,
  Rocket,
  TrendingUp,
  Handshake,
  Award,
  BarChart,
  Lock,
  Globe,
  Zap,
  Cloud,
  Layers,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Features = () => {
  const allFeatures = [
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
    {
      icon: BarChart,
      iconBgColor: "bg-synergy-blue",
      title: "Analytics",
      description:
        "Gain insights into team performance and project progress with comprehensive analytics and reporting tools.",
    },
    {
      icon: Lock,
      iconBgColor: "bg-synergy-orange",
      title: "Security",
      description:
        "Protect your data and intellectual property with enterprise-grade security features and access controls.",
    },
    {
      icon: Globe,
      iconBgColor: "bg-synergy-green",
      title: "Global Access",
      description:
        "Connect with team members and collaborators from anywhere in the world, breaking down geographical barriers.",
    },
    {
      icon: Zap,
      iconBgColor: "bg-synergy-blue-dark",
      title: "Speed",
      description:
        "Accelerate your workflow with optimized processes and tools designed for maximum efficiency.",
    },
    {
      icon: Cloud,
      iconBgColor: "bg-synergy-orange-dark",
      title: "Cloud Storage",
      description:
        "Access your files and projects from anywhere with secure, reliable cloud storage and synchronization.",
    },
    {
      icon: Layers,
      iconBgColor: "bg-synergy-green-dark",
      title: "Integration",
      description:
        "Seamlessly connect with your favorite tools and platforms through our extensive integration ecosystem.",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Features</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the complete set of features that make Synergy the ultimate
            collaboration platform for teams and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              iconBgColor={feature.iconBgColor}
              title={feature.title}
              description={feature.description}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
