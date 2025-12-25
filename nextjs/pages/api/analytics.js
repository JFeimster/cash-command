/**
 * API Route: /api/analytics
 * Server-side proxy for event tracking. 
 * Helps bypass ad-blockers and keeps API keys secret.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { eventName, properties } = req.body;

  if (!eventName) {
    return res.status(400).json({ message: 'Missing event name' });
  }

  // 1. Log to server console (Standard output for server logs like Vercel/AWS CloudWatch)
  console.log(`[Analytics] ${eventName}`, JSON.stringify(properties));

  // 2. Forward to 3rd Party (e.g., Mixpanel / Google Analytics Measurement Protocol)
  // if (process.env.MIXPANEL_TOKEN) {
  //   await fetch('https://api.mixpanel.com/track', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: `data=${JSON.stringify({ event: eventName, properties: { token: process.env.MIXPANEL_TOKEN, ...properties } })}`
  //   });
  // }

  return res.status(200).json({ success: true });
}