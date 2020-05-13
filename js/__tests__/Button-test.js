import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { act } from 'react-dom/test-utils';

describe('Мы можем отобразить кнопку', () => {
    it('Кнопка изменяет текст после щелчка', () => {
        const button = TestUtils.renderIntoDocument(
            <button onClick={ev => ev.target.innerHTML = 'Bye'}>
                Hello
            </button>
        );

        expect(ReactDOM.findDOMNode(button).textContent).toEqual('Hello');
    });
});