import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      title: "Collaboration First",
      description:
        "We practice what we preach, embedding collaborative thinking into everything we do.",
    },
    {
      title: "Innovation Without Bounds",
      description:
        "We push boundaries and challenge assumptions to create breakthrough solutions.",
    },
    {
      title: "Inclusive Excellence",
      description:
        "We believe diversity of thought and background leads to better outcomes.",
    },
    {
      title: "Meaningful Impact",
      description:
        "We measure success by the positive change we enable for our users and communities.",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Synergy</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our story, mission, and vision for the future of collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                Synergy began with a simple observation: the most innovative
                solutions emerge when diverse minds work together. Our founders
                experienced firsthand the challenges of remote collaboration and
                the limitations of existing tools.
              </p>
              <p className="mb-4">
                Established in 2023, we set out to build a platform that doesn't
                just enable collaboration but actively enhances it—creating an
                environment where the whole truly becomes greater than the sum
                of its parts.
              </p>
              <p>
                Today, Synergy powers thousands of teams across the globe, from
                startup innovators to enterprise leaders, all united by the
                belief that together, we can achieve more.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                We exist to unlock human potential through the power of
                collaboration. By breaking down barriers between people, ideas,
                and tools, we create spaces where innovation thrives and
                challenges become opportunities.
              </p>
              <p>
                Our mission extends beyond technology—we're building a future
                where collaboration is frictionless, intuitive, and empowering
                for everyone, regardless of their location, background, or
                expertise.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-center mt-12">
            <Button className="cta-button bg-synergy-gradient">
              Join Our Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
