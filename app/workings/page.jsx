import Head from 'next/head';
import { CheckCircleIcon, PlayIcon, ArrowRightIcon } from 'lucide-react';
import PublicHeader from '../dashboard/_components/PublicHeader';

const steps = [
  {
    title: "Sign Up",
    description: "Create an account to get started with your AI-powered mock interviews.",
    icon: <CheckCircleIcon className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Select an Interview Type",
    description: "Choose the type of interview you want to practice, such as technical, behavioral, or situational.",
    icon: <PlayIcon className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Start Your Mock Interview",
    description: "Begin your mock interview with AI and answer the questions as you would in a real interview.",
    icon: <ArrowRightIcon className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Receive Instant Feedback",
    description: "Get immediate feedback on your performance, including areas for improvement.",
    icon: <CheckCircleIcon className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Improve and Repeat",
    description: "Use the feedback to improve your skills and repeat the process to become more confident.",
    icon: <CheckCircleIcon className="w-12 h-12 text-blue-600" />
  }
];

export default function HowItWorks() {
  return (
    <div>
      <Head>
        <title>How It Works - Mock Interview with AI</title>
        <meta name="description" content="Learn how to use Mock Interview with AI to prepare for your interviews." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <PublicHeader />
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">How It Works</h1>
        <div className="w-full max-w-4xl px-6 py-6 mt-6 bg-white rounded-lg shadow-md">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="flex-shrink-0">
                {step.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
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
