"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useApp } from "@/contexts/ContextApi";
import { HeaderCard } from "@/components/HeaderCard";
import { FooterCard } from "@/components/FooterCard";

export default function Home() {
  const { isDownArrowIconClicked }: any = useApp();
  const { description, setDescription }: any = useApp();

  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-between ">
      <Card
        className={` w-[360px] ${
          isDownArrowIconClicked
            ? `
            h-[45px] w-[200px] overflow-hidden
          `
            : "h-[400px]"
        }} bg-slate-100`}
      >
        <HeaderCard />
        <CardContent>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="resize-none"
            placeholder="Descrição"
          />
        </CardContent>
        <FooterCard />
      </Card>
    </main>
  );
}
