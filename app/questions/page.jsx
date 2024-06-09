import Head from 'next/head';
import PublicHeader from '../dashboard/_components/PublicHeader';

const faqs = [
  {
    question: "What is Mock Interview with AI?",
    answer: "Mock Interview with AI is a platform that uses artificial intelligence to provide realistic mock interview experiences and instant feedback to help you improve your interview skills."
  },
  {
    question: "How does the AI provide feedback?",
    answer: "Our AI analyzes your responses during the mock interview, evaluates your performance, and provides actionable feedback on areas such as clarity, confidence, and content."
  },
  {
    question: "Is the mock interview experience realistic?",
    answer: "Yes, our platform is designed to simulate real interview scenarios as closely as possible to help you prepare effectively."
  },
  {
    question: "Can I get personalized coaching?",
    answer: "Absolutely! In addition to AI feedback, you can also receive personalized coaching tips to further enhance your interview skills."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Just click on the 'Get Started' button on our homepage and follow the instructions to begin your mock interview journey."
  }
];

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>Frequently Asked Questions - Mock Interview with AI</title>
        <meta name="description" content="Find answers to common questions about Mock Interview with AI." />
        
      </Head>
      <header>
        <PublicHeader />
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">Frequently Asked Questions</h1>
        <div className="w-full max-w-4xl px-6 py-6 mt-6 bg-white rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 bg-gray-800">
        <p className="text-gray-400">© 2024 Mock Interview with AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
