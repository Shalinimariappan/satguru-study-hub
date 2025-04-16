
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
      question: "What age groups do you provide tuition for?",
      answer: "We provide tuition for students from LKG to Class XII (ages 4-18). Our programs are tailored to suit the learning needs of different age groups."
    },
    {
      question: "How many students are there in a batch?",
      answer: "We maintain small batch sizes to ensure individual attention. Typically, our batches have 10-15 students to create an optimal learning environment."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials, practice papers, and worksheets that are aligned with the school curriculum to help students prepare thoroughly."
    },
    {
      question: "How often do you conduct tests?",
      answer: "We conduct weekly tests to assess student progress and provide feedback. Additionally, monthly comprehensive tests help track overall improvement."
    },
    {
      question: "What is the fee structure?",
      answer: "The fee structure varies depending on the grade and subjects. For example, Class V fees are ₹50 per day, totaling ₹1500 per month. Please visit our Courses page for detailed fee information for all classes."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both in-person and online tuition options to accommodate different learning preferences and situations."
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
