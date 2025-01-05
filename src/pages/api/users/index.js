export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    // Simple Validation
    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required" });
    }

    // Response with success
    res
      .status(201)
      .json({ message: "User added successfully", user: { name, email } });
  } else {
    // Method not allowed
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
