export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Mailgun, etc.
    // 2. Store the message in a database
    // 3. Trigger any other necessary workflows

    // For now, we'll just simulate a successful response
    return res.status(200).json({ message: 'Message received successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 