import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sumTwoNumbers } from '../server/helpers.js';

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // use some helpers
  const sum = sumTwoNumbers(1, 2);
  console.log(sum)

  // send a response
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
