
import React, { useState } from "react";
import GreetingCard, { GreetingCardProps } from "./GreetingCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const greetingsData: GreetingCardProps[] = [
  {
    greeting: "Bonjour",
    language: "French",
    country: "France",
    color: "blue",
    flagEmoji: "🇫🇷",
    pronunciation: "bohn-ZHOOR"
  },
  {
    greeting: "Hello",
    language: "English",
    country: "United Kingdom",
    color: "coral",
    flagEmoji: "🇬🇧",
    pronunciation: "heh-LOH"
  },
  {
    greeting: "Hola",
    language: "Spanish",
    country: "Spain",
    color: "yellow",
    flagEmoji: "🇪🇸",
    pronunciation: "OH-lah"
  },
  {
    greeting: "Ciao",
    language: "Italian",
    country: "Italy",
    color: "green",
    flagEmoji: "🇮🇹",
    pronunciation: "CHOW"
  },
  {
    greeting: "Konnichiwa",
    language: "Japanese",
    country: "Japan",
    color: "purple",
    flagEmoji: "🇯🇵",
    pronunciation: "koh-NEE-chee-wah"
  },
  {
    greeting: "Ni hao",
    language: "Mandarin",
    country: "China",
    color: "teal",
    flagEmoji: "🇨🇳",
    pronunciation: "nee-HOW"
  },
  {
    greeting: "Namaste",
    language: "Hindi",
    country: "India",
    color: "blue",
    flagEmoji: "🇮🇳",
    pronunciation: "nuh-MUH-stay"
  },
  {
    greeting: "Guten Tag",
    language: "German",
    country: "Germany",
    color: "yellow",
    flagEmoji: "🇩🇪",
    pronunciation: "GOO-ten tahk"
  },
  {
    greeting: "Olá",
    language: "Portuguese",
    country: "Portugal",
    color: "green",
    flagEmoji: "🇵🇹",
    pronunciation: "oh-LA"
  },
  {
    greeting: "Merhaba",
    language: "Turkish",
    country: "Turkey",
    color: "coral",
    flagEmoji: "🇹🇷",
    pronunciation: "mehr-hah-bah"
  },
  {
    greeting: "Sawatdee",
    language: "Thai",
    country: "Thailand",
    color: "purple",
    flagEmoji: "🇹🇭",
    pronunciation: "sah-wah-dee"
  },
  {
    greeting: "Annyeonghaseyo",
    language: "Korean",
    country: "South Korea",
    color: "teal",
    flagEmoji: "🇰🇷",
    pronunciation: "ahn-nyeong-hah-seh-yo"
  }
];

const GreetingCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGreetings, setFilteredGreetings] = useState(greetingsData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (!term) {
      setFilteredGreetings(greetingsData);
      return;
    }
    
    const filtered = greetingsData.filter(
      greeting =>
        greeting.greeting.toLowerCase().includes(term) ||
        greeting.language.toLowerCase().includes(term) ||
        greeting.country.toLowerCase().includes(term)
    );
    
    setFilteredGreetings(filtered);
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
          Say <span className="text-greeting-coral">Hello</span> Around the World
        </h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover how to greet people in different languages. Click on each card to learn more about the greeting.
        </p>
        
        <div className="flex max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search by greeting, language or country..."
            value={searchTerm}
            onChange={handleSearch}
            className="rounded-r-none"
          />
          <Button type="submit" className="rounded-l-none">
            Search
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGreetings.length > 0 ? (
          filteredGreetings.map((greeting, index) => (
            <GreetingCard
              key={index}
              greeting={greeting.greeting}
              language={greeting.language}
              country={greeting.country}
              color={greeting.color}
              flagEmoji={greeting.flagEmoji}
              pronunciation={greeting.pronunciation}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-muted-foreground">
              No greetings found matching "{searchTerm}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GreetingCards;
