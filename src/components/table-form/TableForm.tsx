
import React from 'react';
import TableFormGroup from '../table-form-group';
import Button from '../button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import DateInput from '../date-input';
import {FormStatus} from '../../enums';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {StateModel} from '../../store/types';
import {useSelector} from 'react-redux';
import {actions} from '../../store/config';

type OwnProps = {
    onSubmit: (event: React.FormEvent) => void
};

const TableForm: React.FC<OwnProps> = () => {
    const form = useSelector((state: StateModel) => state.form);

    const inputTitle = useSelector((state: StateModel) => state.form.values.title);
    const handleChangeTitle = () => actions.changeSearchValue(inputTitle);

    const inputDescription = useSelector((state: StateModel) => state.form.values.description);
    const handleChangeDescription = () => actions.changeSearchValue(inputDescription);

    // const inputDate = useSelector((state: StateModel) => state.form.values.date);
    // const handleChangeDate = () => actions.changeSearchValue(inputDate);

    const toggleImportant = useSelector((state: StateModel) => state.form.values.important);
    const handleToggleImportant = () => !toggleImportant;
    // Написать функцию для каждого значения формы, которая кладет value в поле формы
    return (
        <form
            className="card-body"
        // onSubmit={handleSubmit}
        >
            <h4 id="formTitle"
            >{form.status === FormStatus.Create ? 'Добавить событие' : 'Редактировать событие'}</h4>
            <TableFormGroup
                id="title"
                value={form.values.title}
                type="text"
                placeholder="Добавить название"
                label="Название события:"
                onChange={handleChangeTitle}
                required
            />
            <TableFormGroup
                id="description"
                value={form.values.description}
                type="textarea"
                label="Описание:"
                onChange={handleChangeDescription}
            />
            {/* <DateInput
                id="date"
                value={form.values.date}
                placeholder="Введите дату"
                label="Дата события:"
                onChange={handleChangeDate}
            /> */}

            <div className="d-flex pr-3 mb-3 align-items-center">
                <div className="form-check d-flex align-items-center ml-0">
                    <input
                        id="important"
                        checked={form.values.important}
                        className="checkbox"
                        type="checkbox"
                        onChange={handleToggleImportant}
                    />
                </div>
                <span className="text-warning pl-2 pr-2">
                    <FontAwesomeIcon icon={faStar} size="1x" />
                </span>
                <p className="m-0 p-0 h6">Важное событие</p>
            </div>
            <div className="d-flex justify-content-between">
                <Button
                    id="btnTask"
                    type="submit"
                    styleType={form.status === FormStatus.Create ? 'primary' : 'success'}
                    buttonName={form.status === FormStatus.Create ? 'Добавить' : 'Сохранить'}
                />
                <Button
                    id="btnClear"
                    type="button"
                    styleType='secondary'
                    buttonName={form.status === FormStatus.Create ? 'Очистить' : 'Отменить'}
                />
            </div>
        </form >
    )
};

export default TableForm;
