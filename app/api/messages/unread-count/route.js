import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

// GET /api/messages/unread-count
export const GET = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(JSON.stringify('USER id is required'), {
        status: 401,
      });
    }

    const { userId } = sessionUser;
    const unreadMessageCount = await Message.countDocuments({
      recipient: userId,
      read: false,
    });

    return new Response(JSON.stringify({ count: unreadMessageCount }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went Wrong', { status: 500 });
  }
};
