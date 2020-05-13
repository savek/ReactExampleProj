import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from '../other/Counter';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('рендер и обновление счётчика', () => {
    // Тестируем первый рендер и метод componentDidMount
    act(() => { ReactDOM.render(<Counter />, container);  });

    const button = container.querySelector('button');
    const label = container.querySelector('p');
    expect(label.textContent).toBe('Вы нажали на кнопку 0 раз');
    expect(document.title).toBe('Вы нажали на кнопку 0 раз');

    // Тестируем второй рендер и метод componentDidUpdate
    act(() => { button.dispatchEvent(new MouseEvent('click', {bubbles: true})); });
    expect(label.textContent).toBe('Вы нажали на кнопку 1 раз');
    expect(document.title).toBe('Вы нажали на кнопку 1 раз');
});