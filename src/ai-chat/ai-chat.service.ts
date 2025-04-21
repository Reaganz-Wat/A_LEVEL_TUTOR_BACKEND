import { GoogleGenAI } from "@google/genai";
import { Injectable } from '@nestjs/common';
import { TopicsService } from 'src/topics/topics.service';
import { CreateAiChatDto } from './dto/create-ai-chat.dto';
import { UpdateAiChatDto } from './dto/update-ai-chat.dto';
import { ConfigService } from "@nestjs/config";
import { HistoryService } from "src/history/history.service";

@Injectable()
export class AiChatService {

  private ai: GoogleGenAI;

  constructor(
    private readonly topicService: TopicsService,
    private readonly historyService: HistoryService,
    private readonly configService: ConfigService,
  ) {
    this.ai = new GoogleGenAI({
      apiKey: this.configService.get<string>('OPEN_AI_KEY'),
    });
  }


  create(createAiChatDto: CreateAiChatDto) {
    return 'This action adds a new aiChat';
  }

  async generateAIResponse(createAiQuerryDto: CreateAiChatDto, userId: string): Promise<{success: boolean, data: string | undefined}> {
    const topic = await this.topicService.findOne(createAiQuerryDto.topicId);
    
    console.log("Topic title: ", topic.title);
    console.log("Topic description: ", topic.description);
    console.log("Topic userId: ", userId);
    console.log("Content-search: ", createAiQuerryDto.querry);

    // Build the AI query prompt
    const aiPrompt = `
    The following topic is related to A-Level Physics. 
    Please generate relevant, accurate content only regarding the given topic. 
    If the content is outside of A-Level Physics, respond with "This content is not related to A-Level Physics and cannot be generated."

    Topic Title: ${topic.title}
    Topic Description: ${topic.description}
    User Query: ${createAiQuerryDto.querry}

    Response:
    `;

    try {
      // Call Google GenAI API with the constructed prompt
      const response = await this.ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: aiPrompt,
      });
      // console.log("Generated response: ", response.text);

      // Check if the response is empty or not
      if (!response.text) {
        return {
          success: false,
          data: undefined,  // No response generated
        };
      }

      // Save to the database if needed from here
      await this.historyService.create({
        querry: createAiQuerryDto.querry,
        response: response.text,
        userId: userId,
        topicId: createAiQuerryDto.topicId
      })

      return {
        success: true,
        data: response.text,  // Send the generated AI response
      };
    } catch (error) {
      console.error("AI response generation error: ", error);
      throw new Error("Failed to generate AI response.");
    }
  }


  findAll() {
    return `This action returns all aiChat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiChat`;
  }

  update(id: number, updateAiChatDto: UpdateAiChatDto) {
    return `This action updates a #${id} aiChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiChat`;
  }
}
