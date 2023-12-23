import React from "react";

interface TextBackgroundProps {
  children: React.ReactNode;
}

const TextBackground = (props: TextBackgroundProps) => {
  return (
    <div className="inline-flex items-center rounded-lg bg-muted backdrop-blur px-3 py-1 text-sm font-medium">
      {props.children}
    </div>
  );
};

export default TextBackground;
