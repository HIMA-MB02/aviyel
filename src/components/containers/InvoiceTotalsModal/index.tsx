import React from 'react';
import { formatRupee } from '../../../utils/utility';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState, sendFormData, setFormData } from '../../../redux';
import { IInvoiceTotalsModal } from './types';
import { useFormInput } from '../../../utils/CustomHooks';

const InvoiceTotalsModal: React.FunctionComponent<IInvoiceTotalsModal> = ({
    id
}) => {
    const dispatch = useDispatch();
    const totals = useSelector(
        (state: ReduxState) => state.invoiceReducer.formData.totals
    );
    const items = useSelector(
        (state: ReduxState) => state.invoiceReducer.formData.invoiceItemsList
    );
    const formData = useSelector(
        (state: ReduxState) => state.invoiceReducer.formData
    );
    const taxPercent = useFormInput('');
    const discountPercent = useFormInput('');
    const [invItemsError, setInvItemsError] = React.useState('');

    React.useEffect(() => {
        const taxVal = (totals.subTotal * Number(taxPercent.value)) / 100;
        dispatch(
            setFormData('totals', {
                ...totals,
                tax: taxVal,
                grandTotal: totals.subTotal + taxVal - totals.discount
            })
        );
    }, [taxPercent.value]);
    React.useEffect(() => {
        const disVal =
            ((totals.subTotal + totals.tax) * Number(discountPercent.value)) /
            100;
        dispatch(
            setFormData('totals', {
                ...totals,
                discount: disVal,
                grandTotal: totals.subTotal + totals.tax - disVal
            })
        );
    }, [discountPercent.value]);

    const onProceed = () => {
        if (
            taxPercent.finalValidationCheck() &&
            discountPercent.finalValidationCheck() &&
            items.length
        ) {
            dispatch(sendFormData(formData));
            const closeButton = document.getElementById(`${id}-btn`);
            closeButton?.click();
        } else if (!items.length) {
            setInvItemsError('Please add atleast one item!');
        }
    };
    return (
        <>
            <hr />
            <div className='totals-inv-row'>
                <div className='discount-tax'>
                    <div className='form-group dt-input mr-3'>
                        <input
                            className={`form-control ${
                                taxPercent.errorText && 'is-invalid'
                            }`}
                            placeholder='TAX%'
                            {...taxPercent}
                        />
                        {taxPercent.errorText && (
                            <div className='invalid-feedback'>
                                {taxPercent.errorText}
                            </div>
                        )}
                    </div>
                    <div className='form-group dt-input'>
                        <input
                            className={`form-control ${
                                discountPercent.errorText && 'is-invalid'
                            }`}
                            placeholder='DISCOUNT%'
                            {...discountPercent}
                        />
                        {discountPercent.errorText && (
                            <div className='invalid-feedback'>
                                {discountPercent.errorText}
                            </div>
                        )}
                    </div>
                </div>
                <div className='sub-total-invoice'>
                    <h6 className='text-secondary mr-3'>Sub Total</h6>
                    <h6 className='text-secondary'>
                        {formatRupee(totals.subTotal)}
                    </h6>
                </div>
            </div>
            <hr />
            <div className='totals-inv-row'>
                <div className='discount-tax'>
                    <div className='form-group dt-input mr-3'>
                        <h6 className='text-secondary mr-3'>TAX</h6>
                        <label>{formatRupee(totals.tax)}</label>
                    </div>
                    <div className='form-group dt-input'>
                        <h6 className='text-secondary mr-3'>DISCOUNT</h6>
                        <label>{formatRupee(totals.discount)}</label>
                    </div>
                </div>
                <div className='sub-total-invoice'>
                    <div className='sub-total-invoice'>
                        <h5 className='text-secondary mr-3'>Grand Total</h5>
                        <h5 className='text-secondary'>
                            {formatRupee(totals.grandTotal)}
                        </h5>
                    </div>
                    <div>
                        <button
                            className='btn btn-primary btn-large'
                            onClick={onProceed}
                        >
                            PROCEED
                        </button>
                        {invItemsError && (
                            <p className='text-danger'>{invItemsError}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceTotalsModal;
