"use client";

import { Router } from "next/router";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* 404 Digits */}
        <div className="flex justify-center gap-4 mb-10 ">
          <div className="w-24 h-28 bg-black rounded-4xl flex items-center justify-center text-7xl font-bold text-white shadow-lg">
            4
          </div>
          <div className="w-24 h-28 bg-black rounded-4xl flex items-center justify-center text-7xl font-bold text-white shadow-lg">
            0
          </div>
          <div className="w-24 h-28 bg-black rounded-4xl flex items-center justify-center text-7xl font-bold text-white shadow-lg">
            4
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-medium text-black mb-6">Page Not Found</h1>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          The page you are looking for was removed, moved, renamed, or might
          never existed.
        </p>

        {/* Button */}
        <button
          //   onClick={() => Router.back()}
          className="px-8 py-2 bg-black text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
