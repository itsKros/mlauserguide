import React from 'react'



function Footer() {
  const appName = import.meta.env.VITE_APP_NAME;
    return (
        <footer className="mt-4 py-4 text-center text-sm text-gray-600 border-t border-gray-200">
          &copy; {new Date().getFullYear()} {appName}. All rights reserved.
        </footer>
      );
}

export default Footer