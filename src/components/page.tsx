import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <a key={item} href="#" className="text-lg">{item}</a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <a key={item} href="#" className="hover:text-gray-300">{item}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded">
              Content Column {i + 1}
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
