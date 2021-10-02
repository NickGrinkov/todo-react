import React from 'react';
import './Circle.scss';

const Circle = ({color, className, onClick}) => <i onClick={onClick} className={`circle circle-${color} ${className}`}></i>

export default Circle;
