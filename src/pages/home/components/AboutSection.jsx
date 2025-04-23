import React from "react";
import aboutImg from "@/assets/about.avif";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";
import AnimatedContent from "@/components/ui/AnimatedContent";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white overflow-x-hidden">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative flex justify-center w-full md:w-[45%]">
            <div className="relative w-full max-w-[500px]">
              <img src={aboutImg} alt="About TFXE" className="rounded-xl shadow-lg w-full max-h-[400px] object-cover" />
              <div className="absolute -left-6 bottom-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <span className="text-2xl font-bold block">2500+</span>
                <span className="text-sm">Customers worldwide</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex justify-center w-[5%]">
            <div className="flex flex-col items-center h-[300px] w-4 rounded-full overflow-hidden">
              <div className="bg-orange-100 w-full h-[70%]"></div>
              <div className="bg-orange-500 w-full h-[30%]"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-[50%]">
            <Badge color="orange" className="rounded-full mb-4 uppercase font-bold" text="25 Years of Experience" />

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Traders <br className="hidden sm:block" /> Scale Smartly
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide the tools and analytics traders need to scale their strategies, optimize risk, and execute
              trades with confidence across all major global markets.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Icon icon="mdi:check" width={36} className="bg-orange-100 text-orange-500 rounded-full p-2" />

                <div>
                  <h4 className="font-semibold text-gray-900">Certified Platform</h4>
                  <p className="text-gray-600 text-sm">
                    Compliant with top standards. Built for performance and trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon icon="mdi:check" width={36} className="bg-orange-100 text-orange-500 rounded-full p-2" />
                <div>
                  <h4 className="font-semibold text-gray-900">Trusted by Professionals</h4>
                  <p className="text-gray-600 text-sm">Used by hedge funds, prop firms, and elite traders globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default AboutSection;
