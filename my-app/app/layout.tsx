import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex justify-center items-start p-10">
          <div className="w-full max-w-7xl bg-gray-800 rounded-3xl shadow-xl p-10 min-h-[80vh]">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}


