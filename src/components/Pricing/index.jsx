"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, e-commerce solutions, and custom CMS development. Our team specializes in modern technologies like React, Next.js, and various content management systems."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and requirements. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes regular updates, security patches, performance monitoring, and technical support."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern web technologies including React, Next.js, Node.js, TypeScript, and various databases. For content management, we specialize in WordPress, Shopify, BigCommerce, and custom CMS solutions. We also provide mobile app development using React Native and Flutter."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication throughout the project lifecycle. You'll have regular check-ins, progress updates, and direct access to your project manager. We use modern collaboration tools to ensure smooth communication and project tracking."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and requirements. We provide detailed quotes after understanding your specific needs. We offer flexible payment options and can work within various budgets while maintaining quality standards."
    },
    {
      question: "Do you offer e-commerce solutions?",
      answer: "Absolutely! We provide comprehensive e-commerce solutions including custom online stores, payment integration, inventory management, and third-party platform development. We work with Shopify, WooCommerce, and custom e-commerce platforms to meet your business needs."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Yes, we can help improve, maintain, or add new features to existing projects. Our team can analyze your current setup, identify areas for improvement, and implement enhancements while ensuring compatibility and minimal disruption to your operations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black dark:text-white transition-colors duration-300">
      <div className="text-center">
        <p className="text-red-500 uppercase tracking-widest text-sm mb-2">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-light">
          Frequently <span className="font-bold">Asked Questions</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Have questions? We're here to help. Check out our FAQ section for quick answers to common questions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-[#212124] rounded-xl overflow-hidden transition-all duration-300"
          >
            <div
              className="px-6 py-5 flex justify-between items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-[#2D333F] transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-sm sm:text-base font-medium pr-4">{faq.question}</span>
              <span className={`text-red-500 text-xl sm:text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </div>
            {openIndex === index && (
              <div className="px-6 pb-5">
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-red-500 hover:bg-red-600 transition-all text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base">
          Ask More Questions
        </button>
      </div>
    </section>
  );
}
