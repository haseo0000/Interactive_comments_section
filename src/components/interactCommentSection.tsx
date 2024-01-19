import { AllComemntsContext } from "@/context/AllCommentsProvider";
import Button from "@/ui-components/button";
import React, { useContext } from "react";

type Props = {
  isCurrentUser: boolean;
  commentId: number;
};

function InteractCommentSection({ isCurrentUser, commentId }: Props) {
  const { handleReplyId, handleEditId } = useContext(AllComemntsContext);

  return (
    <div className="flex">
      {isCurrentUser ? (
        <>
          <Button
            handle={() => {}}
            pathImg="/images/icon-delete.svg"
            altImg="delete-img"
            name="Delete"
          />
          <Button
            handle={() => handleEditId(commentId)}
            pathImg="/images/icon-edit.svg"
            altImg="edit-img"
            name="Edit"
          />
        </>
      ) : (
        <Button
          handle={() => handleReplyId(commentId)}
          pathImg="/images/icon-reply.svg"
          altImg="reply-img"
          name="REPLY"
        />
      )}
    </div>
  );
}

export default InteractCommentSection;
