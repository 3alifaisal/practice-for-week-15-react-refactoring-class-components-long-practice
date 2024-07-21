import { CSSTransition } from "react-transition-group";
import React, { useRef } from "react";
function TransitionItem({ result, selectName, ...props }) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      key={result}
      classNames="result"
      timeout={{ enter: 500, exit: 300 }}
      {...props}
    >
      <li ref={nodeRef} className="nameLi" onClick={selectName}>
        {result}
      </li>
    </CSSTransition>
  );
}
export default TransitionItem;
