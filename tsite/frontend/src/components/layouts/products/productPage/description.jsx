import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Dscr, { GlobalS } from "./descriptionStyles";
import SendBtn from "./sendButton.png";
import { useSelector } from "react-redux";

const Description = ({ description, callBack }) => {
  const authState = useSelector(state => state.authReducer);
  const editor = useRef(null);
  const [showEditor, setShowEditor] = useState(false);
  const [content, setContent] = useState("");
  useEffect(() => {
    authState.user != null && authState.user.username == "admin"
      ? setShowEditor(true)
      : setShowEditor(false);
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
    processPasteHTML: "true"
    // events: {
    //   keydown: () => {
    //   }
    // }
  };
  return (
    <GlobalS>
      {/* <Dscr.Btn onClick={() => setShowEditor(!showEditor)}>
        {showEditor ? "Скрыть редактор" : "Редактор описания"}
      </Dscr.Btn> */}
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
          <Dscr.Btn onClick={() => callBack(content)}>Сохранить</Dscr.Btn>
        </>
      )}
    </GlobalS>
  );
};

export default Description;
