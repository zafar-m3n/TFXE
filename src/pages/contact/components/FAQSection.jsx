import React from "react";
import Accordion from "@/components/ui/Accordion";

const FAQSection = () => {
  const faqItems = [
    {
      title: "How do I open a trading account?",
      content:
        "Opening an account is simple. Just click the 'Sign Up' button on the homepage, fill in your details, and follow the verification steps.",
    },
    {
      title: "Is my money safe with TFXE?",
      content:
        "Yes. Client funds are held in segregated accounts with top-tier banks and we adhere to strict regulatory standards.",
    },
    {
      title: "What platforms do you support?",
      content:
        "TFXE supports MetaTrader 4 (MT4), MetaTrader 5 (MT5), and our own proprietary web and mobile trading platforms.",
    },
    {
      title: "Do you offer a demo account?",
      content:
        "Absolutely. You can start with a demo account to practice trading with virtual funds and no financial risk.",
    },
    {
      title: "How can I contact support?",
      content:
        "You can reach our support team via email at support@tfxe.live or call us at +44 7360 545857. We’re available 24/5.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};

export default FAQSection;
