import Head from 'next/head';
import Image from 'next/image';
import PublicHeader from '../dashboard/_components/PublicHeader';

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>About Us - Mock Interview with AI</title>
        <meta name="description" content="Learn more about the team behind Mock Interview with AI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <PublicHeader />
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
        <div className="w-full max-w-4xl px-6 py-6 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center text-blue-600">About Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            Welcome to Mock Interview with AI! Our mission is to help job seekers improve their interview skills and increase their chances of landing their dream jobs.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our platform leverages advanced artificial intelligence technology to provide realistic mock interviews and instant, actionable feedback. We believe that practice makes perfect, and our goal is to create an environment where users can practice and refine their interview skills with confidence.
          </p>

          <div className="flex flex-col items-center mt-8 space-y-8">
            <div className="flex flex-col items-center">
              <Image src="/a.png" height={300} width={300} alt="Abhay Kumar Gupta" className="w-[150px] h-[150px] rounded-full" />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">Abhay Kumar Gupta</h2>
              <p className="mt-2 text-gray-600">Founder & CEO</p>
            </div>
          </div>

          <h2 className="mt-8 text-3xl font-bold text-center text-gray-800">Our Story</h2>
          <p className="mt-4 text-lg text-gray-700">
            Abhay Kumar Gupta founded Mock Interview with AI after experiencing firsthand the challenges of preparing for job interviews. With a background in software development and artificial intelligence, Abhay decided to create a solution that could help others overcome these challenges.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Since our inception, we have helped countless job seekers gain confidence and improve their interview performance. We are passionate about making a positive impact on people's lives and are committed to continuously enhancing our platform to better serve our users.
          </p>

          <h2 className="mt-8 text-3xl font-bold text-center text-gray-800">Our Values</h2>
          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li><strong>Excellence:</strong> We strive for excellence in everything we do and are dedicated to providing the best possible experience for our users.</li>
            <li><strong>Innovation:</strong> We are constantly exploring new technologies and ideas to improve our platform and services.</li>
            <li><strong>Integrity:</strong> We believe in honesty, transparency, and ethical practices in all our operations.</li>
            <li><strong>Empowerment:</strong> We aim to empower our users with the tools and knowledge they need to succeed in their careers.</li>
          </ul>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 bg-gray-800">
        <p className="text-gray-400">© 2024 Mock Interview with AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
