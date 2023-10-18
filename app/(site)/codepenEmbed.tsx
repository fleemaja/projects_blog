// https://css-tricks.com/recreating-the-codepen-gutenberg-embed-block-for-sanity-io/

import React from "react";

const CodepenEmbed = (props: any) => {
  const { url } = props;
  if (!url) {
    return (<div>Add a CodePen URL</div>)
  }
  const splitURL = url.split("/");
  // [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/preview/${hash}?default-tab=result&theme-id=dark`;
  return (
    <iframe 
      height="500" 
      style={{ width: '100%' }}
      scrolling="no" 
      title="Atari Breakout" 
      src={embedUrl} 
      frameBorder="no" 
      loading="lazy" 
      allowTransparency
      allowFullScreen>
    </iframe>
  );
};

export default CodepenEmbed;