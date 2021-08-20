import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux';
import { useFormInput } from '../../../utils/CustomHooks';
import './styles.css';

const Search: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const search = useFormInput('');
    // to debounce the dispatch value
    const [typingTimeout, setTypingTimeout] = React.useState<ReturnType<
        typeof setTimeout
    > | null>(null);

    useEffect(() => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setTypingTimeout(
            setTimeout(() => {
                dispatch(setSearchValue(search.value));
            }, 150)
        );
    }, [search.value]);
    return (
        <div className='searchbox'>
            <input
                className='form-control search-input'
                type='text'
                name='search'
                {...search}
                placeholder='Search by Invoice ID'
            ></input>
        </div>
    );
};

export default Search;
