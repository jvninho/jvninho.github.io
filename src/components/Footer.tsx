
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-8 px-6 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-handwriting text-xl text-greeting-coral">Bonjour</span>
              <span className="text-xs text-muted-foreground">Charming Greetings</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Explore greetings from around the world
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 md:mt-0">
            <div>
              <h3 className="font-medium mb-2">Learn More</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>About Us</li>
                <li>Language Resources</li>
                <li>Travel Tips</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Contact</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>hello@bonjour-greetings.com</li>
                <li>Support</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bonjour - Charming Greetings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
