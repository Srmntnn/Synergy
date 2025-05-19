import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="connect" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-synergy-gradient opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-synergy-blue/10 blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-synergy-green/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Synergy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our collaborative platform today and start connecting with
              like-minded innovators. Together we can create solutions that
              conquer the most challenging problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="cta-button bg-synergy-gradient w-full sm:w-auto">
              Start Collaborating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
