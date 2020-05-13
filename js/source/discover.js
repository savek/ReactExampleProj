'use strict';

import Logo from './components/Logo';
import Button from "./components/Button";
import Suggest from "./components/Suggest";
import Rating from "./components/Rating";
import FormInput from "./components/FormInput";
import Form from "./components/Form";
import React from 'react';
import ReactDOM from 'react-dom';
import Actions from "./components/Actions";
import Dialog from "./components/Dialog";

ReactDOM.render(
    <div style={{padding: '20px'}}>
        <h1>Component discoverer</h1>

        {/*Logo*/}
        <h2>Logo</h2>
        <div style={{display: 'inline-block', background: 'purple'}}>
            <Logo/>
        </div>

        {/*Button*/}
        <h2>Buttons</h2>
        <div>Button with onClick:
            <Button onClick={() => alert('ouch')}>Click me</Button>
        </div>
        <div>
            A link:
            <Button href="http://reactjs.com">Follow me</Button>
        </div>
        <div>Custom class name:
            <Button className="custom">I do nothing</Button>
        </div>

        {/*Suggest*/}
        <h2>Suggest</h2>
        <div><Suggest options={['eenie', 'meenie', 'miney', 'mo', 'mike']}/></div>

        {/*Rating*/}
        <h2>Rating</h2>
        <div>No initial value: <Rating/></div>
        <div>Initial value 4: <Rating defaultValue={4}/></div>
        <div>This one goes to 11: <Rating max={11}/></div>
        <div>Read-only: <Rating readonly={true} defaultValue={3}/></div>

        {/*Form inputs*/}
        <h2>Form inputs</h2>
        <table>
            <tbody>
            <tr>
                {/*Обычный ввод*/}
                <td>Vanilla input</td>
                <td><FormInput/></td>
            </tr>
            <tr>
                {/*С предварительным заполнением*/}
                <td>Prefilled</td>
                <td><FormInput defaultValue="it's like a default"/></td>
            </tr>
            <tr>
                {/*Год*/}
                <td>Year</td>
                <td><FormInput type="year"/></td>
            </tr>
            <tr>
                {/*Рейтинг*/}
                <td>Rating 1</td>
                <td><FormInput type="rating" defaultValue={4} id="rate" /></td>
            </tr>
            <tr>
                {/*Предложение*/}
                <td>Suggest</td>
                <td><FormInput
                    id="sug"
                    type="suggest"
                    options={['red', 'green', 'blue']}
                    defaultValue="green"/>
                </td>
            </tr>
            <tr>
                {/*Обычная текстовая область*/}
                <td>Vanilla textarea</td>
                <td><FormInput type="text"/></td>
            </tr>
            </tbody>
        </table>

        {/*Form*/}
        <h2>Form</h2>
        <Form
            fields={[
                {label: 'Rating', type: 'rating', id: 'rateme'},
                {label: 'Greetings', id: 'freetext'}
            ]}
            initialData={ {rateme: 4, freetext: 'Hello'} } />

        <h2>Actions</h2>
        <div><Actions onAction={type => {alert(type); console.log("type: " + type)}} /></div>

        {/*Dialog*/}
        <h2>Dialog</h2>

        <Dialog
            header="Out-of-the-box example"
            modal={false}
            onAction={type => alert(type)}>
            Hello, dialog!
        </Dialog>

        <Dialog
            header="No cancel, custom button"
            hasCancel={false}
            confirmLabel="Whatever"
            onAction={type => alert(type)}>
            Anything goes here, see:
            <Button>A button</Button>
        </Dialog>

        {/* сюда помещаются дополнительные компоненты... */}
    </div>,
    document.getElementById('pad')
);