import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('/assets/banner.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }}></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Satguru Study Centre and our commitment to educational excellence
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left - Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our tuition programs? Want to enroll your child?
                Fill out the form or contact us directly through the information provided.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">Chennai - 81</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:satguru162019@gmail.com" className="text-gray-600 hover:text-satguru">
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
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-satguru/10 p-3 rounded-full text-satguru mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {formSubmitted ? (
                <div className="p-6 border border-green-200 bg-green-50 rounded-md text-green-800">
                  Thank you! Your message has been sent.
                </div>
              ) : (
                <form
                  action="https://getform.io/f/bwnqlrja" // Replace {your_form_id} with your actual form ID from Getform.io
                  method="POST"
                  className="space-y-6"
                  onSubmit={() => setFormSubmitted(true)}
                >
                  {/* Hidden Config */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />

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
                    className="bg-satguru text-white hover:bg-satguru-dark"
                  >
                    Send Message
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
