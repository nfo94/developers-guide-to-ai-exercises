import express from "express";
import { Ollama } from "ollama";
import cors from "cors";

const app = express();
const ollama = new Ollama();

app.use(cors());
app.use(express.json());

app.post("/", async (request, response) => {
  response.type("text/plain");

  const body = request.body;

  const modelResponse = await ollama.generate({
    model: "llama3.2",
    prompt: body.question,
    stream: true,
  });

  // console.log("\nAIMessage object response:\n");
  // console.log(modelResponse);

  // response.send(modelResponse.response);

  console.log("\nStreaming response...\n");
  for await (const chunk of modelResponse) {
    response.write(chunk.response);
  }

  response.end();
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
