import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import PublicHeader from "./dashboard/_components/PublicHeader";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-Powered Mock Interviews: Prepare, Practice, Succeed",
  description: "Elevate your interview preparation with our advanced AI-driven mock interview platform. Experience real-time, personalized feedback, and practice with industry-specific questions to boost your confidence and performance. Get ready to ace your next interview with precision and poise Key Features: Realistic Interview Simulations: Engage in lifelike interview scenarios tailored to your desired job role. Personalized Feedback: Receive detailed analysis and constructive feedback to improve your responses . Industry-Specific Questions: Practice with questions relevant to your field to gain a competitive edge. Flexible Scheduling: Practice anytime, anywhere with our convenient and accessible platform.Performance Tracking: Monitor your progress and identify areas for improvement with our comprehensive analytics.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={inter.className}>
          {/* <PublicHeader /> */}
          <Toaster />
          <NextTopLoader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
