"use client";

import { createContext, useState } from "react";
import MockData from "@/data/data.json";

interface IAllComemntsContext {
  replyId: number | null;
  editId: number | null;
  handleReplyId: (id: number) => void;
  handleEditId: (id: number) => void;
  comments: IComment[];
  currentUser: IUser;
  handleAddScore: (id: number, parentCommentId: number) => void;
  handleDecresesScore: (id: number, parentCommentId: number) => void;
}

type AllCommentsProviderProps = {
  children: React.ReactNode;
};

export const AllComemntsContext = createContext<IAllComemntsContext>(
  {} as IAllComemntsContext
);

export default function AllCommnetsProvider({ children }: AllCommentsProviderProps) {
  const [replyId, setReplyId] = useState<number | null>(null);
  const [editId, setEditIdId] = useState<number | null>(null);
  const [comments, setComments] = useState<IComment[]>(MockData.comments);
  const currentUser: IUser = MockData.currentUser;

  const handleReplyId = (id: number) => {
    if (replyId === id) {
      return setReplyId(null);
    }
    setReplyId(id);
  };

  const handleEditId = (id: number) => {
    if (editId === id) {
      return setEditIdId(null);
    }
    setEditIdId(id);
  };

  const handleAddScore = (id: number, parentCommentId?: number) => {
    const output = [...comments].map((obj) => {
      if (!parentCommentId) {
        if (obj.id === id) {
          return { ...obj, score: obj.score + 1 };
        }
        return obj;
      }
      if (obj.id === parentCommentId) {
        const replyArr = obj.replies?.map((reply) => {
          if (reply.id === id) {
            return { ...reply, score: reply.score + 1 };
          }
          return reply;
        });
        return { ...obj, replies: replyArr };
      }
      return obj;
    });

    return setComments(output);
  };

  const handleDecresesScore = (id: number, parentCommentId?: number) => {
    const output = [...comments].map((obj) => {
      if (!parentCommentId) {
        if (obj.id === id && obj.score > 0) {
          return { ...obj, score: obj.score - 1 };
        }
        return obj;
      }
      if (obj.id === parentCommentId) {
        const replyArr = obj.replies?.map((reply) => {
          if (reply.id === id && reply.score > 0) {
            return { ...reply, score: reply.score - 1 };
          }
          return reply;
        });
        return { ...obj, replies: replyArr };
      }
      return obj;
    });

    return setComments(output);
  };

  return (
    <AllComemntsContext.Provider
      value={{
        replyId,
        editId,
        handleReplyId,
        handleEditId,
        comments,
        currentUser,
        handleAddScore,
        handleDecresesScore,
      }}>
      {children}
    </AllComemntsContext.Provider>
  );
}
