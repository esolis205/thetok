import type { NextApiRequest, NextApiResponse } from 'next';
import { uuid } from 'uuidv4';
import { client } from '../../utils/client';

// function { handler } will create a new user inside of Sanity's DB.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'PUT'){
    const { userId, postId, like } = req.body;

    const data = like ? await client
    .patch(postId)
    .setIfMissing({ likes: [] })
    .insert('after', 'likes[-1]',[
        {
            _key: uuid(),
            _ref: userId
        }
    ])
    .commit()
    : await client
    .patch(postId)
    .unset([`likes[_ref=="${userId}"]`])
    .commit();

    res.status(200).json(data);
  }
}