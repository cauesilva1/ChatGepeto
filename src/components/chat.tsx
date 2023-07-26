"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "ai/react";



export default function ChatGpeto() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className=" h-[600px] w-[400px] bg-slate-300 rounded-xl grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat Gepeto</CardTitle>
        <CardDescription> teste </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (

            <div key={message.id} className="flex gap-2 text-slate-700 text-sm ">
              
                {message.role === "user" &&( 
                    <Avatar>
                    <AvatarFallback>CS</AvatarFallback>
                    <AvatarImage src="https://github.com/cauesilva1.png" />
                  </Avatar>
                )}

                {message.role === "assistant" &&( 
                    <Avatar>
                    <AvatarFallback>Chat</AvatarFallback>
                    <AvatarImage src="https://www.9mm.cl/wp-content/uploads/2023/01/openai-logo.png" />
                  </Avatar>
                )}

              <div className="flex flex-col -translate-y-[3px]">
                <span className="block font-bold text-slate-800"> 
                {message.role === 'user' ? 'User' : 'Chat' }
                </span>
                <p className="bg-slate-200/70 rounded-tr-3xl rounded-br-xl rounded-bl-xl p-2">
                  {message.content}
                </p>
              </div>

            </div>
          );
        })}

      </CardContent>
      <CardFooter>

        <form onSubmit={handleSubmit} className=" w-full flex gap-2">

          <Input placeholder="Digite sua pergunta!!"  value={input} onChange={handleInputChange}/>

          <Button type="submit" >
            Enviar
          </Button>

        </form>

      </CardFooter>
    </Card>
  );
}
