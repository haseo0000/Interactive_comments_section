import React, { useContext } from "react";
import { AllComemntsContext } from "@/context/AllCommentsProvider";
import styles from "./cardComment.module.css";
import ButtonAddAndDecreaseScore from "@/ui-components/buttonAddAndDecreaseScore";
import ReplyComment from "@/components/replyComment";
import CommentSection from "@/components/commentSection";
import DetailsCommentSection from "@/components/detailsCommentSection";
import InteractCommentSection from "@/components/interactCommentSection";

type CommentProps = {
  comment: IComment;
  currentUser: IUser;
  isHaveReply?: boolean;
  parentCommentId?: number;
};

function Card({ comment, currentUser, isHaveReply, parentCommentId }: CommentProps) {
  const { replyId, editId } = useContext(AllComemntsContext);

  const isCurrentUser = comment.user.username === currentUser?.username;
  const isClickReply = replyId === comment.id;
  const isEdit = editId === comment.id;

  return (
    <>
      <div
        className={`${
          isHaveReply ? styles.card : ""
        } p-[20px] bg-white rounded-[15px] mb-[20px] grid items-start md:grid-cols-[max-content_1fr] gap-[20px]`}>
        <section className="md:block hidden">
          <ButtonAddAndDecreaseScore
            id={comment.id}
            parentCommentId={parentCommentId!}
            score={comment.score}
          />
        </section>
        <section className="grid gap-[1rem]">
          <DetailsCommentSection commentDetails={comment} isCurrentUser={isCurrentUser} />
          <CommentSection
            commentDetails={comment}
            isEdit={isEdit}
            parentCommentId={parentCommentId!}
          />
          <section className="md:hidden flex justify-between">
            <ButtonAddAndDecreaseScore
              id={comment.id}
              parentCommentId={parentCommentId!}
              score={comment.score}
            />
            <InteractCommentSection
              isCurrentUser={isCurrentUser}
              commentId={comment.id}
            />
          </section>
        </section>
      </div>
      {isClickReply && (
        <div
          className={`${
            isHaveReply ? styles.card : ""
          } flex items-start gap-[20px] p-[20px] mb-[20px] -mt-[15px] bg-white rounded-[15px]`}>
          <ReplyComment
            replyTo={comment.user.username}
            currentUserImg={currentUser.image.png}
          />
        </div>
      )}
    </>
  );
}
export default Card;
