import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, setFormData } from '../../../redux';
import { formatRupee } from '../../../utils/utility';
import { InvoiceModalTableInput } from '../../atoms';
import './styles.css';

const InvoiceItemsModalTable: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const items = useSelector(
        (state: ReduxState) => state.invoiceReducer.formData.invoiceItemsList
    );
    const removeListItem = (id: number) => {
        const newFormData = items.filter((inv) => inv.id !== id);
        dispatch(setFormData('invoiceItemsList', [...newFormData]));
    };
    const renderInvoiceItems = () => {
        if (items.length) {
            return items.map((i, index) => (
                <tr
                    className='table-body text-muted'
                    key={`modal-inv-item-${index}`}
                >
                    <th scope='col' className='table-item'>
                        {i.itemName}
                    </th>
                    <th scope='col'>{i.itemQuantity}</th>
                    <th scope='col'>{formatRupee(i.itemUnitPrice)}</th>
                    <th scope='col'>{formatRupee(i.itemPrice)}</th>
                    <td onClick={() => removeListItem(i.id)}>X</td>
                </tr>
            ));
        }
    };
    return (
        <table className='table table-light'>
            <thead>
                <tr>
                    <th scope='col' className='table-item'>
                        ITEM
                    </th>
                    <th scope='col'>QUANTITY</th>
                    <th scope='col'>UNIT PRICE</th>
                    <th scope='col'>TOTAL PRICE</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {!items.length && (
                    <tr className='table-body text-primary'>
                        <td scope='col' className='table-item'>
                            Example
                        </td>
                        <td>10</td>
                        <td>{formatRupee(600)}</td>
                        <td>{formatRupee(6000)}</td>
                        <td>X</td>
                    </tr>
                )}
                {renderInvoiceItems()}
                <InvoiceModalTableInput />
            </tbody>
        </table>
    );
};

export default InvoiceItemsModalTable;
