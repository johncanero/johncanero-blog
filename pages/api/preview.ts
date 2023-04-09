import type { NextApiRequest, NextApiResponse } from "next";

// Go to localhose:3000/api/preview (to view live streaming editing in Studio)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, { location: "/" });
  res.end();
}