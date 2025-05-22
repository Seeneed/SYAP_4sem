import React from "react";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <input type="text" value={value} readOnly className="display" />;
};

export default Display;