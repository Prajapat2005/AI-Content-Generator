import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY });


const Chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [
    ],
});

export default Chat;


