import React from 'react';
function MainContent(props) {
  return (
    <>
      <main>{props.content_page}</main>
      <p>{props.children}</p>
    </>
  );
}

export default MainContent;
