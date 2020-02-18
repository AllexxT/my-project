import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Dscr, { GlobalS } from "./descriptionStyles";
import SendBtn from "./sendButton.png";

const Description = ({ description, callBack }) => {
  const editor = useRef(null);
  const [showEditor, setShowEditor] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(description);
  }, []);

  const config = {
    readonly: false,
    extraButtons: [
      {
        iconURL: SendBtn,
        exec: () => {}
      }
    ],
    toolbarButtonSize: "large",
    processPasteHTML: "true",
    // events: {
    //   keydown: () => {
    //   }
    // }
  };
  return (
    <GlobalS>
      <Dscr.Btn onClick={() => setShowEditor(!showEditor)}>
        Редактор
      </Dscr.Btn>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {showEditor && (
        <>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {
              val = newContent
            }}
          />
          <Dscr.Btn onClick={() => callBack(content)}>Сохранить</Dscr.Btn>
        </>
      )}
    </GlobalS>
  );
};

export default Description;
