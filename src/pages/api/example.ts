import { env } from '@/env.mjs';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const versionHandler: NextApiHandler = (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(env.VERSION);
};

export default versionHandler;
