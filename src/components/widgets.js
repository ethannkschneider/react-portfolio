import React, { Component } from 'react';
import Button from './reusable/button';

const Widgets = () => (
  <div>
    <h1>Widgets</h1>
    <p>
      Here are some widgets:
    </p>
    <Button
      background='#534B62'
      textColor='#F4FFF8'
      text='A widget'
      cb={()=> alert('A widget')} />
  </div>
);

export default Widgets;
