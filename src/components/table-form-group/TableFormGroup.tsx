import React from 'react';
import {useSelector} from 'react-redux';
import {actions} from '../../store/config';
import {StateModel} from '../../store/types';

type Props = {
    id: string;
    type: string;
    label: string;
    value: string;
    required?: boolean;
    placeholder?: string;
    onChange: (value: string) => void;
};

const TableFormGroup: React.FC<Props> = ({label, required}) => {
        const searchValue = useSelector((state: StateModel) => state.searchValue);
    
        return (
            <div className="form-group">
                <label>
                    {label}
                    {required && <span className="text-danger"> *</span>}
                </label>
                <input onChange={() => actions.changeSearchValue(searchValue)} className="form-control mb-3" ></input>
            </div>
        )
    };

export default TableFormGroup;
