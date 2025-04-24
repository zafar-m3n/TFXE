import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    setLoading((prev) => true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Thanks! Your message has been sent.");
        form.reset();
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading((prev) => false);
  };

  return (
    <section className="py-20 bg-white overflow-x-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Get in touch with <br className="hidden md:block" />
              our expert team
            </h2>

            {status && <div className="text-sm text-green-600 font-medium mb-4">{status}</div>}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Hidden Inputs for Web3Forms */}
              <input type="hidden" name="access_key" value="383e7158-d9a8-4061-9b2c-2fa04eb053aa" />
              <input type="hidden" name="subject" value="New Lead from TFXE" />
              <input type="hidden" name="from_name" value="tfxe.live" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Please describe what you need. *"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <Button type="submit" color="primary" size="md" className="mx-auto w-fit md:mx-0" loading={loading}>
                Send Now
              </Button>
            </form>
          </div>

          <div className="bg-white shadow-[0_0_30px_rgba(255,115,0,0.40)] rounded-2xl p-8 md:p-10 relative z-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Icon icon="heroicons:map-pin" width={36} className="p-2 bg-orange-100 text-orange-600 rounded-full" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Address</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    22 Broomfield Place, Stoven, <br />
                    United Kingdom.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon icon="heroicons:phone" width={36} className="p-2 bg-orange-100 text-orange-600 rounded-full" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Make a Call</h4>
                  <p className="text-gray-600 text-sm mt-1">+44 7360 545857</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon icon="heroicons:envelope" width={36} className="p-2 bg-orange-100 text-orange-600 rounded-full" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Send Us Mail</h4>
                  <p className="text-gray-600 text-sm mt-1">support@tfxe.live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default ContactSection;
