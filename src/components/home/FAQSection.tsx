
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggle }: FAQItemProps) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 text-left font-medium"
      onClick={toggle}
    >
      <span className="text-gray-900">{question}</span>
      {isOpen ? (
        <ChevronUp className="h-5 w-5 text-satguru" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-500" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 pb-4" : "max-h-0"
      }`}
    >
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What classes do you offer coaching for?",
      answer: "We provide coaching for students from I to Class XII (State Board). Subjects include languages, mathematics, science, social science, commerce, and more."
    },
    {
    question: "Is there regular testing?",
    answer: "Absolutely. Weekly and monthly tests are conducted to track student performance. Tests marks are shared with both students and parents."
  },
  {
    question: "What makes Satguru Study Centre different?",
    answer: "At Satguru, we combine strong academic guidance with personal attention, structured notes, regular testing, and constant parent involvement — all in a safe, motivating environment."
  },
  {
    question: "How can I enroll my child?",
    answer: "You can visit the Contact Us section or walk into our centre directly."
  },
  {
    question: "How often are parent–teacher meetings conducted?",
    answer: "We conduct parent–teacher meetings at key points during the academic year, especially before board exams for Classes X, XI, and XII. Additional meetings can be scheduled on request."
  }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-satguru mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tuition programs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
