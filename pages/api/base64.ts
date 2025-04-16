import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action, text } = req.body;
  try {
    if (action === 'encode') {
      res.json({ result: Buffer.from(text).toString('base64') });
    } else if (action === 'decode') {
      res.json({ result: Buffer.from(text, 'base64').toString('utf-8') });
    } else {
      res.status(400).json({ error: '无效操作' });
    }
  } catch (err) {
    res.status(500).json({ error: '处理出错' });
  }
}