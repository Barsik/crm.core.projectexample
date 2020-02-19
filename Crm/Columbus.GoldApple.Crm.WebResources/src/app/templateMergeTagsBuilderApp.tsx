import * as React from "react";
import * as ReactDOM from "react-dom";
import "./../assets/main.scss"
import TemplateMergeTagsBuilder from "../components/transactionalEmail/templateMergeTagsBuilder";

ReactDOM.render(
  <TemplateMergeTagsBuilder />,
  document.getElementById("root")
);
