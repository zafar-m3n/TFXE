import React from "react";
import Icon from "@/components/ui/Icon";
import useWidth from "@/hooks/useWidth";
import AnimatedContent from "@/components/ui/AnimatedContent";

const reviews = [
  {
    name: "Ravi Kumar",
    role: "Financial Analyst",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    review: "Using TFXE transformed how I understand real-time data. It’s like having an analyst on demand.",
  },
  {
    name: "Sara Al-Hassan",
    role: "Crypto Trader",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    review: "The insights are sharp and the signals reliable. It’s a tool I trust daily.",
  },
  {
    name: "James Walker",
    role: "Retail Investor",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    review: "TFXE helps me make smarter, faster decisions. It’s my daily dashboard.",
  },
  {
    name: "Fatima Noor",
    role: "Investment Advisor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "The interface is clean and professional, and I love the speed of the alerts.",
  },
  {
    name: "Arjun Desai",
    role: "Options Trader",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    review: "I can’t imagine trading without it. The indicators are spot on.",
  },
  {
    name: "Emily Stone",
    role: "Portfolio Manager",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    review: "Excellent analytics platform. It saves me hours of research every week.",
  },
];

const ReviewSection = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm">Customer Reviews</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What our users say <br className="hidden md:block" /> about the platform
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {reviews.map((review, i) => (
            <AnimatedContent
              distance={100}
              direction={isMobile ? "horizontal" : "vertical"}
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <div key={i} className="bg-orange-50 p-6 rounded-xl shadow-md flex flex-col justify-between h-full">
                <div>
                  <Icon icon="mdi:format-quote-open" width={24} className="text-orange-400 mb-4" />
                  <p className="italic text-gray-700 mb-6">{review.review}</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
