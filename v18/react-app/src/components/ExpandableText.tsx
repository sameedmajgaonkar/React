import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;

// MY IMPLEMENTATION

// const ExpandableText = ({ maxChars = 100, children }: Props) => {
//     const [text, setText] = useState("More");
//     const [maxCh, setMaxCh] = useState(0);
//     const handleClick = () => {
//       if (text === "More") {
//         setText("Less");
//         setMaxCh(99999999999);
//       } else {
//         setText("More");
//         setMaxCh(0);
//       }
//     };
//     return (
//       <>
//         <h3>EXPANDABLE TEXT</h3>;
//         <div>
//           {maxCh ? children.substr(0, maxCh) : children.substr(0, maxChars)}...
//         </div>
//         <button onClick={handleClick}>{text}</button>
//       </>
//     );
//   };
