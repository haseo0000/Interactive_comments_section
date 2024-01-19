import React, { useContext, useState } from "react";
import styles from "./textArea.module.css";
import { AllComemntsContext } from "@/context/AllCommentsProvider";

type Props = {
  replyTo?: string;
  content?: string;
  parentId?: number;
  status: "REPLY" | "EDIT" | "CREATE";
};

function TextArea({ replyTo, content, status, parentId }: Props) {
  const { handleEditComment } = useContext(AllComemntsContext);

  const [comment, setComment] = useState<string>(getMessage());

  function getMessage() {
    switch (status) {
      case "REPLY":
        return `@${replyTo}, `;
      case "EDIT":
        return `${content}`;
      default:
        return "";
    }
  }

  return (
    <>
      <div className={styles.container}>
        <textarea
          className={styles.scroll}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
          placeholder="Add a comment..."
        />
      </div>
      {status === "EDIT" && (
        <button
          className={`${styles.textArea_button} ${styles.button_update}`}
          type="button"
          onClick={() => handleEditComment(comment, parentId!)}>
          UPDATE
        </button>
      )}
      {status === "REPLY" && (
        <button
          className={styles.textArea_button}
          type="button"
          onClick={() => {
            console.log("reply");
          }}>
          REPLY
        </button>
      )}
      {status === "CREATE" && (
        <button
          className={styles.textArea_button}
          type="button"
          onClick={() => {
            console.log("send");
          }}>
          SEND
        </button>
      )}
    </>
  );
}

export default TextArea;
