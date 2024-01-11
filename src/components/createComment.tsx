"use client";

import React, { useContext } from "react";
import ReplyComment from "./replyComment";
import { AllComemntsContext } from "@/context/AllCommentsProvider";

function CreateComment() {
  const { currentUser } = useContext(AllComemntsContext);

  return (
    <div className="bg-white p-5 rounded-xl flex items-start gap-4">
      <ReplyComment currentUserImg={currentUser.image.png} isCreated />
    </div>
  );
}

export default CreateComment;
