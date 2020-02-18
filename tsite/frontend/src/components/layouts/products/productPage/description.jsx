import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Dscr, { GlobalS } from "./descriptionStyles";

const Description = ({ description, callBack }) => {
  const editor = useRef(null);
  const [showEditor, setShoEditor] = useState(false);
  const [content, setContent] = useState("");
  useEffect(() => {
    setContent(description);
  }, [description]);
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    useAceEditor: false
  };
  return (
    <GlobalS>
      <button
        style={{
          padding: "3px",
          border: "1px solid #000",
          height: "30px",
          backgroundColor:
            "linear-gradient(to top, rgb(207, 207, 207) 16%, rgb(252, 252, 252) 79%)",
          userSelect: "none",
          whiteSpace: "pre",
          alignItems: "flex-start",
          textAlign: "center",
          cursor: "default",
          color: "buttontext",
          boxSizing: "border-box",
          padding: "1px 6px",
          borderWidth: "2px",
          borderStyle: "outset",
          borderColor: "buttonface",
          borderImage: "initial"
        }}
        onClick={() => {
          setShoEditor(!showEditor);
        }}
      >
        Показать/Скрыть редактор описания
      </button>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {showEditor && (
        <>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {}}
          />
          <button
            style={{
              padding: "3px",
              border: "1px solid #000",
              color: "black",
              height: "30px",
              backgroundImage:
                "linear-gradient(to top, rgb(207, 207, 207) 16%, rgb(252, 252, 252) 79%)"
            }}
            onClick={() => {
              callBack(content);
            }}
          >
            Применить
          </button>
        </>
      )}
    </GlobalS>
  );
};

export default Description;
