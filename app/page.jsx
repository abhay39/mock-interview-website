"use client"
import { useUser } from '@clerk/nextjs';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import PublicHeader from './dashboard/_components/PublicHeader';

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  if (user) {
    router.replace("/dashboard")
  }
  

  return (

    <div>
      <Head>
        <title>Mock Interview with AI</title>
        <meta name="description" content="Ace your interviews with AI-powered mock interviews" />

      </Head>
      <header>
        <PublicHeader />
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 px-4">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-center text-blue-600">
          Mock Interview with AI
        </h1>
        <p className="mt-3 text-sm md:text-2xl text-center">
          Ace your interviews with AI-powered mock interviews
        </p>

        

        <div className="flex flex-row flex-wrap w-full justify-center items-center gap-10  mt-6 ">
          <a
            href="/sign-in"
            className="px-2 lg:px-6 py-3 text-sm md:text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-2 lg:px-6 py-3 text-sm md:text-lg font-semibold  text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
          >
            Learn More
          </a>
        </div>

        <section id="features" className="w-full px-4 py-12 mt-12 bg-white">
          <div className="">
            <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800">
              Features
            </h2>
            <div className="grid gap-8 mt-6 md:grid-cols-3">
              <div className="p-6 bg-gray-100 rounded-lg">
                <h3 className=" text-sm md:text-xl font-semibold text-gray-700">AI-Powered Feedback</h3>
                <p className="mt-2 text-gray-600 text-xs md:text-sm">
                  Receive instant, actionable feedback on your interview performance.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg">
                <h3 className="text-sm md:text-xl font-semibold text-gray-700">Realistic Mock Interviews</h3>
                <p className="mt-2 text-gray-600 text-xs md:text-sm">
                  Experience realistic interview scenarios to better prepare for the real thing.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg">
                <h3 className="text-sm md:text-xl font-semibold text-gray-700">Personalized Coaching</h3>
                <p className="mt-2 text-gray-600 text-xs md:text-sm">
                  Get personalized coaching tips to improve your interview skills.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t px-4">
        <p className="text-gray-600 text-xs md:text-sm lg:text-xl text-center">© 2024 Mock Interview with AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
