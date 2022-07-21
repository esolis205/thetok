import type { NextApiRequest, NextApiResponse } from 'next';

import { allUsersQuery } from '../../utils/queries';
import { client } from '../../utils/client';

// function { handler } will create a new user inside of Sanity's DB.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET'){
    const data = await client.fetch(allUsersQuery());

    if(data){
        res.status(200).json(data);
    } else {
        res.json([]);
    }
  }
}