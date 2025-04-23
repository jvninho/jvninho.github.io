
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-handwriting text-2xl text-greeting-coral">Bonjour</span>
        <span className="text-sm text-muted-foreground">Charming Greetings</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">About</Button>
        <Button variant="ghost" size="sm">Languages</Button>
        <Button variant="ghost" size="sm">Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;
