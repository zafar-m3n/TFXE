import React from "react";
import Icon from "@/components/ui/Icon";
import rohan from "@/assets/rohan.webp";
import emma from "@/assets/emma.webp";
import arjun from "@/assets/arjun.webp";
import useWidth from "@/hooks/useWidth";
import AnimatedContent from "@/components/ui/AnimatedContent";

const teamMembers = [
  {
    name: "Rohan Mehta",
    role: "Senior Market Analyst",
    image: rohan,
    socials: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Emma Collins",
    role: "Head of Marketing",
    image: emma,
    socials: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Arjun Patel",
    role: "Product Designer",
    image: arjun,
    socials: ["facebook", "twitter", "linkedin"],
  },
];

const TeamSection = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm">Team Members</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet our professional and <br className="hidden md:block" />
            expert team members
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
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
              <div key={index} className="text-center relative">
                <div className="relative rounded-xl">
                  <img src={member.image} alt={member.name} className="w-full h-auto rounded-xl object-cover" />

                  <div className="flex absolute md:top-1/2 md:-translate-y-1/2 md:-right-6 md:flex-col bg-white rounded-lg shadow-lg md:p-2 md:space-y-2 space-x-2 md:space-x-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 py-2 px-6 bottom-4 md:bottom-auto">
                    {member.socials.map((platform) => (
                      <div
                        key={platform}
                        className="bg-orange-500 text-white w-8 h-8 rounded flex items-center justify-center hover:p-1 transition-all duration-300"
                      >
                        <Icon icon={`mdi:${platform}`} width={20} />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
