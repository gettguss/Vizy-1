import React from 'react';
import { Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center">
        <Clock className="mr-2" />
        <h1 className="text-2xl font-bold">ClockWatch</h1>
      </div>
    </header>
  );
};

export default Header;