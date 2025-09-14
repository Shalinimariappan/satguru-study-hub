import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyGWJffl85rxS2Ez30oxAgJzqMLRwgAaoKfzTnJ4CnlPBszvc5dxGc4oZpC_DwkuYar3g/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFormSubmitted(true);
      form.reset();
    } catch (error) {
      alert("❌ Failed to send message. Try again!");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/assets/banner.jpg')",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-satguru"
          style={{ opacity: 0.65 }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Satguru Study Centre and our commitment to
            educational excellence
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left - Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Have a doubt? Let’s clear it together.
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our tuition programs? Want to enroll your
                child? Fill out the form or contact us directly through the
                information provided.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      📍 Satguru Study Centre New Washermenpet, Chennai – 600
                      081. Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:satguru162019@gmail.com"
                      className="text-gray-600 hover:text-satguru"
                    >
                      satguru162019@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 72000 15773</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <p className="text-gray-600">5.30 p.m. to 9.30 p.m.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {formSubmitted ? (
                <div className="p-6 border border-green-200 bg-green-50 rounded-md text-green-800">
                  ✅ Thank you! Your message has been sent.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <Input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                  />
                  <Input
                    required
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                  <Textarea
                    required
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-satguru text-white hover:bg-satguru-dark"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
