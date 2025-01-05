import { validateRequest } from "@/middleware/validateRequest";

export const greetHandler = (req, res) => {
  validateRequest(req, res, () => {
    const { name } = req.query;
    res.status(200).json({ greeting: `Hello from middleware, ${name}!` });
  });
};
