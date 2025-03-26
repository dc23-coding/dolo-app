import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-white shadow-t">
      <div className="container mx-auto text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Harvest Union. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
