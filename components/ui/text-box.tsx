import React from "react";

interface TextBoxProps {
  text: string;
}

const TextBox = (props: TextBoxProps) => {
  const { text } = props;

  return (
    <span className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"></span>
  );
};

export default TextBox;
