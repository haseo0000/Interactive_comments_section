import React, { useContext } from "react";
import styles from "./buttonAddAndDecreaseScore.module.css";
import Button from "./button";
import { AllComemntsContext } from "@/context/AllCommentsProvider";

type Props = {
  id: number;
  parentCommentId: number;
  score: number;
};

function ButtonAddAndDecreaseScore({ id, parentCommentId, score }: Props) {
  const { handleAddScore, handleDecresesScore } = useContext(AllComemntsContext);

  return (
    <div className={styles.container}>
      <Button
        handle={() => handleAddScore(id, parentCommentId!)}
        pathImg="/images/icon-plus.svg"
        altImg="plus-img"
        width={12}
        height={12}
      />
      <span className="font-bold">{score}</span>
      <Button
        handle={() => handleDecresesScore(id, parentCommentId!)}
        pathImg="/images/icon-minus.svg"
        altImg="minus-img"
        width={12}
        height={12}
      />
    </div>
  );
}

export default ButtonAddAndDecreaseScore;
