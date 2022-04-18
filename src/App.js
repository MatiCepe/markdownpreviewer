import './App.css';
//import parse from "./utils/markedLanguage";
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { useState } from 'react';

import ScriptTag from 'react-script-tag';

const marked = () => (
<ScriptTag type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.2/marked.min.js" integrity="sha512-hzyXu3u+VDu/7vpPjRKFp9w33Idx7pWWNazPm+aCMRu26yZXFCby1gn1JxevVv3LDwnSbyKrvLo3JNdi4Qx1ww==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.2/marked.min.js" integrity="sha512-hzyXu3u+VDu/7vpPjRKFp9w33Idx7pWWNazPm+aCMRu26yZXFCby1gn1JxevVv3LDwnSbyKrvLo3JNdi4Qx1ww==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
)

function App() {
  var textual = marked.parse("## A sub heading element (H2 size) #\n");
  return (
    <div className="App">
      <Editor />
      <Previewer textParsed={textual}/>
    </div>
  );
}

export default App;
