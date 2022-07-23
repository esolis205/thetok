import type { NextApiRequest, NextApiResponse } from 'next';
import { searchPostsQuery } from '../../../utils/queries';

import { client } from '../../../utils/client';

// function { handler } will create a new user inside of Sanity's DB.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET'){
    const { searchTerm } = req.query;

    const videosQuery = searchPostsQuery(searchTerm);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}