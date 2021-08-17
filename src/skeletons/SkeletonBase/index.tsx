import React from 'react';
import { ISkeletonBase } from './types';
import './SkeletonBase.css';

const SkeletonBase: React.FunctionComponent<ISkeletonBase> = ({ type }) => {
    return <div className={`skeleton ${type}`}></div>
};

export default SkeletonBase;