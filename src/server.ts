import { fastify } from "fastify";
import { fastifyCors } from '@fastify/cors'
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcioption";
import { generateAiCompletion } from "./routes/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletion);

const PORT = 3333;
app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log("Server running on port " + PORT);
  });
