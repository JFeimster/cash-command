/**
 * API Route: /api/lead-submit
 * Handles contact forms and lead capture submissions.
 * In production, this would integrate with HubSpot, Salesforce, or SendGrid.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, message, providerId } = req.body;

  // 1. Basic Validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // 2. Simulate Latency (Remove in production)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. Mock Integration with CRM (e.g., HubSpot/Zapier)
    // const crmResponse = await fetch(process.env.CRM_WEBHOOK_URL, {
    //   method: 'POST',
    //   body: JSON.stringify({ ...req.body, source: 'moonshine-capital' }),
    //   headers: { 'Content-Type': 'application/json' }
    // });

    console.log(`[Lead Captured] ${email} - Interest: ${providerId || 'General'}`);

    // 4. Success Response
    return res.status(200).json({ 
      success: true, 
      message: 'Lead received successfully. We will be in touch shortly.' 
    });

  } catch (error) {
    console.error('Lead Submit Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}