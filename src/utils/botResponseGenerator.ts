import { Groq } from "groq-sdk";
import { Message } from "@/types/chat";

const SYSTEM_PROMPT = `You are a Game Master running a text-based adventure game. Your role is to:
1. Create an immersive narrative experience
2. Always present exactly 4 numbered choices after each response
3. Respond to the player's choices with engaging descriptions
4. Keep track of the story context
5. Include elements of mystery, challenge, and discovery
6. Make choices have meaningful consequences

Format your responses like this:
[Narrative description of what happens based on their choice]

Choose your next action:
1. [Option 1]
2. [Option 2]
3. [Option 3]
4. [Option 4]

Parameters:
temperature: 0
mirostat_tau: 1.0
num_ctx: 4096
top_k: 10
top_p: 0.5`;

export const generateBotResponse = async (
  userMessage: string,
  messages: Message[],
  setIsTyping: (isTyping: boolean) => void
) => {
  setIsTyping(true);
  
  try {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("Groq API key is not configured");
    }

    const client = new Groq({
      apiKey,
      dangerouslyAllowBrowser: true
    });

    console.log("Sending request to Groq API for game response...");
    
    const chatHistory = messages.map(msg => ({
      role: msg.isBot ? "assistant" as const : "user" as const,
      content: msg.text,
    }));

    const completion = await client.chat.completions.create({
      messages: [
        { role: "system" as const, content: SYSTEM_PROMPT },
        ...chatHistory,
        { role: "user" as const, content: userMessage }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0,
      top_p: 0.5,
      max_tokens: 1024,
    });

    console.log("Received game response from Groq API:", completion);

    if (!completion.choices?.[0]?.message?.content) {
      throw new Error("Invalid response format from Groq API");
    }

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Game Master Error:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to get response: ${error.message}`);
    }
    throw new Error("Failed to get response from Game Master");
  } finally {
    setIsTyping(false);
  }
};