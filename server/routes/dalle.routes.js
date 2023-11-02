import express from "express";
import * as dotenv from 'dotenv'
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

// Setup OpenAI 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello from DALL.E ROUTES"
    });
});

router.post('/generate', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });
        const image = response.data.data[0].b64_json;

        res.status(200).json({
            message: "Image generated successfully",
            image, // Include the base64 encoded image data in the response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "An error occurred while generating the image.",error:error });
    }
});

export default router;
