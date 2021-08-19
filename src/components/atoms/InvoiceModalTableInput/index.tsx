import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, ReduxState } from '../../../redux';
import { useFormInput } from '../../../utils/CustomHooks';

const InvoiceModalTableInput: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const items = useSelector(
        (state: ReduxState) => state.invoiceReducer.formData.invoiceItemsList
    );
    const itemName = useFormInput('');
    const quantity = useFormInput('');
    const unitPrice = useFormInput('');

    const handleClick = () => {
        if (
            itemName.finalValidationCheck() &&
            quantity.finalValidationCheck() &&
            unitPrice.finalValidationCheck()
        ) {
            dispatch(
                setFormData('invoiceItemsList', [
                    ...items,
                    {
                        id: items.length + 1,
                        itemName: itemName.value,
                        itemQuantity: Number(quantity.value),
                        itemUnitPrice: Number(unitPrice.value),
                        itemPrice:
                            Number(quantity.value) * Number(unitPrice.value)
                    }
                ])
            );
            itemName.setValue('');
            quantity.setValue('');
            unitPrice.setValue('');
        }
    };
    return (
        <tr className='table-body table-input'>
            <td scope='col' className='table-item'>
                <input
                    className={`form-input form-control ${
                        itemName.errorText && 'is-invalid'
                    }`}
                    type='text'
                    {...itemName}
                    placeholder={'Long Island Ice Tea'}
                    name='itemName'
                />
                {itemName.errorText && (
                    <div className='invalid-feedback'>{itemName.errorText}</div>
                )}
            </td>
            <td scope='col'>
                <input
                    className={`form-input form-control ${
                        quantity.errorText && 'is-invalid'
                    }`}
                    type='number'
                    {...quantity}
                    placeholder={'10'}
                    name='number'
                />
                {quantity.errorText && (
                    <div className='invalid-feedback'>{quantity.errorText}</div>
                )}
            </td>
            <td scope='col'>
                <input
                    className={`form-input form-control ${
                        unitPrice.errorText && 'is-invalid'
                    }`}
                    type='number'
                    {...unitPrice}
                    placeholder={'600'}
                    name='number'
                />
                {unitPrice.errorText && (
                    <div className='invalid-feedback'>
                        {unitPrice.errorText}
                    </div>
                )}
            </td>
            <td scope='col'>
                {Number(quantity.value) * Number(unitPrice.value)}
            </td>
            <td className='text-center'>
                <button className='btn btn-primary' onClick={handleClick}>
                    ENTER
                </button>
            </td>
        </tr>
    );
};

export default InvoiceModalTableInput;
