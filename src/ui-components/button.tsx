import React from "react";
import Image from "next/image";
import styles from "./button.module.css";

type ButtonProps = {
  handle: () => void;
  pathImg: string;
  altImg: string;
  name?: string;
  width?: number;
  height?: number;
};

function Button({ handle, pathImg, altImg, name, width = 18, height = 18 }: ButtonProps) {
  return (
    <button type="button" className={styles.button} onClick={handle}>
      <Image src={pathImg} alt={altImg} width={width} height={height} />
      {name && <span className="font-bold">{name}</span>}
    </button>
  );
}

export default Button;
