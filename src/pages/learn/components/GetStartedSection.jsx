import React from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const steps = [
  {
    icon: "mdi:account-plus",
    title: "Create an Account",
    description: "Sign up for free and gain access to all market tools.",
  },
  {
    icon: "mdi:bank-transfer",
    title: "Fund Your Wallet",
    description: "Securely deposit funds using trusted payment methods.",
  },
  {
    icon: "mdi:chart-line",
    title: "Start Trading",
    description: "Explore live market updates and place your first trade.",
  },
  {
    icon: "mdi:shield-check",
    title: "Learn & Grow",
    description: "Access educational content and improve your strategy.",
  },
];

const GetStartedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">How to Start with TFXE</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Starting your trading journey with TFXE is simple and secure. Follow the steps below and become part of a
            thriving trading community.
          </p>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <Icon icon={step.icon} width={36} className="bg-orange-100 text-orange-600 p-2 rounded-full" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-[0_0_30px_rgba(255,115,0,0.40)] rounded-2xl p-8 md:p-10 relative z-10">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Please describe what you need. *"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <Button color="primary" size="md" className="mx-auto w-fit md:mx-0">
              Send Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
