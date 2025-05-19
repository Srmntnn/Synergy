import React from "react";

const FeatureCard = ({
  icon: Icon,
  iconBgColor,
  title,
  description,
  delay = 0,
}) => {
  return (
    <div
      className="feature-card animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`feature-icon ${iconBgColor}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
