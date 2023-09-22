import Refractor from "react-refractor";

import js from "refractor/lang/javascript";
import css from 'refractor/lang/css';
Refractor.registerLanguage(js);
Refractor.registerLanguage(css);

import "prismjs/themes/prism-tomorrow.css";

export default function CodeEmbed(props: any) {
    return (
      <Refractor
        language={props.language}
        value={props.code}
        markers={props.highlightedLines}
      />
    )
  }