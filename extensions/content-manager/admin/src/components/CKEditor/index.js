import React from "react";
import PropTypes from "prop-types";

import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Editor from "ckeditor5-custom-build/build/ckeditor";

import styled from "styled-components";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "link",
    "|",
    "alignment",
    "|",
    "bulletedList",
    "numberedList",
    "todoList",
    "|",
    "indent",
    "outdent",
    "|",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
    "|",
    "horizontalLine",
    "removeFormat",
  ],
  image: {
    styles: ["full", "alignLeft", "alignCenter", "alignRight"],
    resizeOptions: [
      {
        name: "imageResize:original",
        label: "Original",
        value: null,
      },
      {
        name: "imageResize:50",
        label: "50%",
        value: "50",
      },
      {
        name: "imageResize:75",
        label: "75%",
        value: "75",
      },
    ],
    toolbar: [
      "imageStyle:full",
      "|",
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "|",
      "imageResize",
      "|",
      "imageTextAlternative",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
  mediaEmbed: {
    previewsInData: true,
  },
};

const mediaConfig = {
  mediaEmbed: { previewsInData: true },
};

const CustomEditor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={Editor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log("onChange");
          onChange({ target: { name, value: data } });
        }}
        config={editorConfiguration}
      />
    </Wrapper>
  );
};

CustomEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default CustomEditor;
