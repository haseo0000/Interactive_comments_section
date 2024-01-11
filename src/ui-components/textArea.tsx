import React, { useState } from "react";
import styles from "./textArea.module.css";

type Props = {
  replyTo?: string;
  content?: string;
  status: "REPLY" | "EDIT" | "CREATE";
};

function TextArea({ replyTo, content, status }: Props) {
  const [comment, setComment] = useState<string>(getMessage());

  function getMessage() {
    switch (status) {
      case "REPLY":
        return `@${replyTo}, `;
      case "EDIT":
        return `@${replyTo}, ${content}`;
      default:
        return "";
    }
  }

  return (
    <div className={styles.container}>
      <textarea
        className={styles.scroll}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="Add a comment..."
      />
    </div>
  );
}

export default TextArea;
