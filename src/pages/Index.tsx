
import React from "react";
import Navbar from "@/components/Navbar";
import GreetingCards from "@/components/GreetingCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <GreetingCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
