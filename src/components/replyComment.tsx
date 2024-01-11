"use client";

import React from "react";
import Image from "next/image";
import TextArea from "@/ui-components/textArea";

type Props = {
  replyTo?: string;
  currentUserImg: string;
  isCreated?: boolean;
};

function ReplyComment({ replyTo, currentUserImg, isCreated }: Props) {
  return (
    <>
      <Image src={currentUserImg} alt="user-img" width={40} height={40} />
      <TextArea replyTo={replyTo} status={isCreated ? "CREATE" : "REPLY"} />
      <button className="px-6 py-2 bg-[#5055af] rounded-[10px] text-white" type="button">
        {isCreated ? "SEND" : "REPLY"}
      </button>
    </>
  );
}

export default ReplyComment;
