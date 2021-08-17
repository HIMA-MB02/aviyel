import React from 'react';
import { ISkeletonBase } from './types';
import './styles.css';

const SkeletonBase: React.FunctionComponent<ISkeletonBase> = ({ type }) => {
    return <div className={`skeleton ${type}`}></div>;
};

export default SkeletonBase;
