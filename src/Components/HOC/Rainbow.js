import React from "react";

const Rainbow = (WrappedComponent) => {
  const color = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "muted",
    "lgiht",
  ];

  const randomColor = color[Math.floor(Math.random() * 8)];

  const className = `text-${randomColor}`;

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
