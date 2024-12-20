import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export const useDallE = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const generateImage = async (message: string) => {
    console.log("Starting DALL-E image generation for prompt:", message);
    setIsLoading(true);
    
    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: `Fantasy game scene: ${message}`,
        n: 1,
        size: "1024x1024",
        quality: "standard",
      });

      console.log("DALL-E response received:", response);
      
      if (response.data[0].url) {
        setImageUrl(response.data[0].url);
      }
    } catch (error) {
      console.error("Image generation failed:", error);
      toast({
        title: "Error Generating Image",
        description: error instanceof Error ? error.message : "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    imageUrl,
    generateImage
  };
};