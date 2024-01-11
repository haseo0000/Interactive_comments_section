import React from "react";
import Image from "next/image";

type ButtonProps = {
  handle: () => void;
  pathImg: string;
  altImg: string;
  name?: string;
  classNames?: string;
  width?: number;
  height?: number;
};

function Button({
  handle,
  pathImg,
  altImg,
  name = "",
  classNames = "",
  width = 18,
  height = 18,
}: ButtonProps) {
  return (
    <button type="button" className={`flex items-center ${classNames}`} onClick={handle}>
      <Image src={pathImg} alt={altImg} width={width} height={height} />
      <span className="font-bold">{name}</span>
    </button>
  );
}

export default Button;
