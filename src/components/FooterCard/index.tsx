import React, { useState } from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useApp } from "@/contexts/ContextApi";
import { useToast } from "../ui/use-toast";

export const FooterCard = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState<boolean>(false);
  const { rating, description, setError }: any = useApp();

  async function sendFeedback() {
    setSending(true);

    try {
      let response = await axios.post(
        "https://feedbackapi-three.vercel.app/send-feedback",
        {
          rating,
          description,
        }
      );

      if (response) {
        setSending(false);
        setError(false);
        toast({
          title: "Feedback enviado com sucesso!",
          description: "Obrigado por nos ajudar a melhorar!",
        });
      }
    } catch (err) {
      setSending(false);
      setError(true);
      toast({
        title: `Erro ao enviar feedback! Verifique se a descrição foi preenchida!`,
        description: "Tente novamente mais tarde!",
      });
    }
  }

  return (
    <CardFooter>
      {sending ? (
        <Button className="w-[100%]" disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button
          onClick={() => {
            sendFeedback();
          }}
          className="w-[100%] transition-colors duration-300 bg-purple-900 text-white hover:bg-white hover:text-purple-900"
        >
          Enviar Feedback
        </Button>
      )}
    </CardFooter>
  );
};
