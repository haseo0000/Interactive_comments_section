"use client";

import React, { useContext } from "react";
import Card from "./cardComment";
import { AllComemntsContext } from "@/context/AllCommentsProvider";

function AllComments() {
  const { comments, currentUser } = useContext(AllComemntsContext);

  return (
    <div className="md:max-w-[800px]">
      {comments.map((comment) => (
        <div key={comment.id}>
          <Card comment={comment} currentUser={currentUser} />
          {comment.replies?.length !== 0 &&
            comment.replies?.map((reply) => (
              <Card
                key={reply.id}
                parentCommentId={comment.id}
                comment={reply}
                currentUser={currentUser}
                isHaveReply
              />
            ))}
        </div>
      ))}
    </div>
  );
}

export default AllComments;
