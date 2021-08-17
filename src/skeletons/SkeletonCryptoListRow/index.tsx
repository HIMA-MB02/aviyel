import React from 'react';
import SkeletonBase from '../SkeletonBase';

const SkeletonCryptoList: React.FunctionComponent = () => {
    return (
        <tr>
            <td className='align-cell-center'>
                <SkeletonBase type='sub-title center'/>
            </td>
            <td className={`align-cell-left`}><SkeletonBase type='avatar' /><SkeletonBase type='sub-title' /></td>
            <th><SkeletonBase type='sub-title' /></th>
            <th className={`align-cell-center`}>
                <SkeletonBase type='sub-title center' />
            </th>
            <th className={`align-cell-center`}>
                <SkeletonBase type='sub-title center' />
            </th>
            <td className='align-cell-right'>
                <SkeletonBase type='sub-title right' />
            </td>
            <td className='align-cell-right'>
                <SkeletonBase type='sub-title right' />
            </td>
            <td className='align-cell-right'>
                <SkeletonBase type='sub-title right' />
            </td>
        </tr>
    )
};

const SkeletonCryptoListRow = ({times = 20}) => {
    let card = [];
    for (let i = 0; i < times; i++) {
        card.push(<SkeletonCryptoList key={i}/>)
    }
    return card
}

export default SkeletonCryptoListRow;