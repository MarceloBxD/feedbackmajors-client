import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { DownArrowIcon } from "../DownArrowIcon";
import Rating from "../Rating";
import { useApp } from "@/contexts/ContextApi";

export const HeaderCard = () => {
  const { isDownArrowIconClicked, setIsDownArrowIconClicked }: any = useApp();

  return (
    <CardHeader>
      <div
        className={`${
          isDownArrowIconClicked ? "-mt-10" : ""
        } flex items-center justify-between`}
      >
        <Avatar className="w-fit h-[80px]">
          <AvatarImage src="./logo-preto.png" />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
        <DownArrowIcon
          onClick={() => {
            setIsDownArrowIconClicked(!isDownArrowIconClicked);
          }}
          className={`${
            isDownArrowIconClicked ? "rotate-180" : ""
          } transition-transform duration-300`}
        />
      </div>
      <CardTitle className={`${isDownArrowIconClicked ? "hidden" : "block"}`}>
        Feedback
      </CardTitle>

      <CardDescription className="mb-3">
        Deixe sua avaliação para a Majors Solutions
      </CardDescription>
      <Rating />
    </CardHeader>
  );
};
