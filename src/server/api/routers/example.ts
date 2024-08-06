import { env } from '@/env.mjs';
import type { NextApiHandler } from 'next';

export const versionHandler: NextApiHandler = (_req, res) => {
    res.status(200).json(env.VERSION);
};

export default versionHandler;
