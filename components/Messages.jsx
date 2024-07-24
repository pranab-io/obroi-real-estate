'use client';

import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import Message from '@/components/Message';
import { toast } from 'react-toastify';
import { useGlobalContext } from '@/context/GlobalContext';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setUnread } = useGlobalContext();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch('/api/messages');

        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.log('Error fetching messages: ', error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        setMessages((msgs) => msgs.filter((msg) => msg._id !== id));
        setUnread((prev) => prev - 1);
        toast.success('Message Deleted');
      }
    } catch (error) {
      toast.error('Message was not delted!');
    }
  };

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="bg-pink-50">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Messages</h1>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <p>You have no messages.</p>
            ) : (
              messages.map((message) => (
                <Message
                  key={message._id}
                  message={message}
                  handleDelete={handleDelete}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
