import TextArea from "@/ui-components/textArea";
import React from "react";

type Props = {
  commentDetails: IComment;
  isEdit?: boolean;
  parentCommentId: number;
};

function CommentSection({ commentDetails, isEdit = false, parentCommentId }: Props) {
  const { content, replyingTo } = commentDetails;

  return (
    <section className="grid gap-3">
      {isEdit ? (
        <TextArea
          content={content}
          replyTo={replyingTo}
          parentId={parentCommentId}
          status="EDIT"
        />
      ) : (
        <span>
          {replyingTo && <span className="text-[#5055af] font-bold">@{replyingTo} </span>}
          {content.split(" ").map((item, idx) => {
            if (item[0] === "@") {
              return (
                <span key={idx} className="text-[#5055af] font-bold">
                  {item + " "}
                </span>
              );
            }
            return <span key={idx}>{item + " "}</span>;
          })}
        </span>
      )}
    </section>
  );
}

export default CommentSection;
