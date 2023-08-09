import React from 'react';
import renderApp from '../pages/Covalent_index';

function RenderAppBlock() {
  React.useEffect(() => {
    renderApp(); 
  }, []);

  return <div className="render-app-block">{}</div>;
}

export default RenderAppBlock;