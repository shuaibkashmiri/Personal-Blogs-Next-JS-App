import { greetHandler } from "@/controllers/greetController";

export default function handler(req, res) {
  greetHandler(req, res);
}
