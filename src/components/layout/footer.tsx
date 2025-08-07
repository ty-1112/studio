import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container py-6">
        <p className="text-center text-sm text-secondary-foreground">
          © {new Date().getFullYear()} BugMed Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
