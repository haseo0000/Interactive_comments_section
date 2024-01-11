import React, { useContext } from "react";
import Button from "./button";
import { AllComemntsContext } from "@/context/AllCommentsProvider";

type Props = {
  id: number;
  parentCommentId: number;
  score: number;
  classNames?: string;
};

function ButtonAddAndDecreaseScore({ id, parentCommentId, score, classNames }: Props) {
  const { handleAddScore, handleDecresesScore } = useContext(AllComemntsContext);

  return (
    <div className={classNames}>
      <Button
        handle={() => handleAddScore(id, parentCommentId!)}
        pathImg="/images/icon-plus.svg"
        altImg="plus-img"
        classNames="p-2"
        width={12}
        height={12}
      />
      <span className="font-bold">{score}</span>
      <Button
        handle={() => handleDecresesScore(id, parentCommentId!)}
        pathImg="/images/icon-minus.svg"
        altImg="minus-img"
        classNames="p-2"
        width={12}
        height={12}
      />
    </div>
  );
}

export default ButtonAddAndDecreaseScore;
