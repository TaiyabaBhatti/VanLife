import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function TabFilter({ path, text }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <button
      onClick={() => setSearchParams(`?${path}`)}
      className="bg-dull-orange text-gray-600 rounded-md  cursor-pointer font-bold text-base text-center py-1.5 px-5 "
    >
      {text}
    </button>
  );
}
