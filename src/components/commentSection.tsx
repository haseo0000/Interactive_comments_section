import TextArea from "@/ui-components/textArea";
import React from "react";

type Props = {
  replyingTo: string;
  content: string;
  isEdit?: boolean;
};

function CommentSection({ replyingTo, content, isEdit = false }: Props) {
  return (
    <section>
      {isEdit ? (
        <TextArea content={content} replyTo={replyingTo} status="EDIT" />
      ) : (
        <>
          {replyingTo && (
            <span className="text-[#5055af] font-bold">@ {replyingTo} </span>
          )}
          <span>{content}</span>
        </>
      )}
    </section>
  );
}

export default CommentSection;
