import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const yoinkComponent = (Component: any) => {
    var props = JSON.parse(document.currentScript.getAttribute('data-props'));
    var id = document.currentScript.getAttribute('data-mount-point-id');
    ReactDOM.render(<Component {...props} />, document.querySelector('#'+id));
}