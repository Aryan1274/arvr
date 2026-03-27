import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center mt-8 border-t">
      <div className="container mx-auto">
        <span className="text-gray-600">&copy; {new Date().getFullYear()} ArVr Store. All rights reserved.</span>
      </div>
    </footer>
  );
}