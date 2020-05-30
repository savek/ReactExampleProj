jest
  .dontMock('../source/components/Button')
  .dontMock('classnames')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Button from "../source/components/Button";

// const Button = require('../source/components/Button').default;

describe('Отображение компонентов Button', () => {
  it('Отображает <a> и <button>', () => {
    const button = TestUtils.renderIntoDocument(
      <div>
        <Button>
          Hello
        </Button>
      </div>
    );
    expect(ReactDOM.findDOMNode(button).children[0].nodeName).toEqual('BUTTON');
    
    const a = TestUtils.renderIntoDocument(
      <div>
        <Button href="#">
          Hello
        </Button>
      </div>
    );
    expect(ReactDOM.findDOMNode(a).children[0].nodeName).toEqual('A');
  });
  
  it('Разрешает применять пользовательские классы CSS', () => {
    const button = TestUtils.renderIntoDocument(
      <div><Button className="good bye">Hello</Button></div>
    );

    console.log(ReactDOM.findDOMNode(button).outerHTML);

    const buttonNode = ReactDOM.findDOMNode(button).children[0];
    expect(buttonNode.getAttribute('class')).toEqual('Button good bye');
  });
  
});
