import React from "react";
import { StarIcon } from "@radix-ui/react-icons";
import { useApp } from "@/contexts/ContextApi";

export default function Rating() {
  const { rating, setRating }: any = useApp();

  return (
    <div className="flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`${
            i <= rating ? "text-yellow-400" : "text-gray-400"
          } w-5 h-5 cursor-pointer ml-1`}
          onClick={() => setRating(i)}
        />
      ))}
    </div>
  );
}
