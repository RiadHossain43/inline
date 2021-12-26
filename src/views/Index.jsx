import React from "react";
// reactstrap components
import {
  Container
} from "reactstrap";

import Header from "components/headers/Header";
import MarkDown from "components/markDown/MarkDown";
import InputArea from "../components/editors/markdown/InputArea";
const Index = (props) => {
  let [markdown,setMarkdown] = React.useState('')
  React.useEffect(()=>setMarkdown(''),[])
  return (
    <>
      <Header />
      <Container fluid>
        <MarkDown markdown={markdown}/>
        <InputArea setMarkdown={setMarkdown}/>
      </Container>
    </>
  );
};

export default Index;
