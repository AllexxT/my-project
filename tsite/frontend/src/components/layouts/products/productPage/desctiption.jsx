import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Dscr, { GlobalS } from "./descriptionStyles";

const Description = ({ description }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  useEffect(() => {
    setContent(description);
  }, [description]);
  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };
  return (
    <GlobalS>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}
      />
      <button onClick={() => console.log(content)}>Button</button>
    </GlobalS>
  );
};

export default Description;
