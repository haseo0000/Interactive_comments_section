import React from "react";
import Image from "next/image";
import InteractCommentSection from "@/components/interactCommentSection";

type Props = {
  commentDetails: IComment;
  isCurrentUser: boolean;
};

function DetailsCommentSection({ commentDetails, isCurrentUser }: Props) {
  const { id, createdAt, user } = commentDetails;

  return (
    <section className="flex justify-between">
      <div className="flex items-center  gap-[1rem]">
        <Image src={user.image.png} alt="user-img" width={40} height={40} />
        <span className="font-bold">{user.username}</span>
        {isCurrentUser && (
          <span className="text-white bg-[#5055af] px-2 pb-[0.5px] text-[0.75em]">
            you
          </span>
        )}
        <span>{createdAt}</span>
      </div>
      <div className="md:flex hidden">
        <InteractCommentSection isCurrentUser={isCurrentUser} commentId={id} />
      </div>
    </section>
  );
}

export default DetailsCommentSection;
