import React from 'react';
import './DateInput.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight as fasChevronRight, faChevronLeft as fasChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {makeDayMonthForDate} from '../../utils';

import {useState} from 'react';
import {Task} from '../../types';

const CONTAINER_CLASS = 'DateInputContainer';

type OwnProps = {
    id: string;
    value: string;
    label: string;
    placeholder?: string;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
};

type Calendar = (number | string)[][];

type State = {
    isShow: boolean;
    month: number;
    year: number;
    today: number;
};

const DateInput: React.FC<OwnProps> = ({id, value, label, placeholder, onChange}) => {
    // const [isShow, month, year, today] = useState(false);

    const getDaysOnMonth = (month: number, year: number) => {
        return 32 - new Date(year, month, 32).getDate();
    };

    // Возвращает день недели 0-6, где 0 - вск
    const getStartWeekday = (month: number, year: number) => {
        return new Date(year, month, 0).getDay();
    };

    const getMonthPage = (month: number, year: number) => {
        const calendar: Calendar = [];
        const startWeekDay = getStartWeekday(month, year);
        const daysOnMonth = getDaysOnMonth(month, year);
        let counter = 0;
        for (let row = 0; row < 6; row += 1) {
            calendar.push([]);
            for (let col = 0; col < 7; col += 1) {
                const day = (counter || col >= startWeekDay) && counter < daysOnMonth ? ++counter : '';
                calendar[row].push(day);
            }
        }
        return calendar;
    };

    // const isClickInContainer = (element: any): boolean => {
    //     if (element.classList?.contains(CONTAINER_CLASS)) {
    //         return true;
    //     }
    //     if (!element.parentNode) {
    //         return false;
    //     }
    //     return isClickInContainer(element.parentNode);
    // }

    // const handleClickOnWindow = (event: MouseEvent) => {
    //     event.stopPropagation();
    //     if (!isClickInContainer(event.targnpmet)) {
    //         handleCloseCalendar();
    //     }
    // }

    // componentDidMount() {
    //     document.addEventListener('click', handleClickOnWindow);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', handleClickOnWindow);
    // }

    // const handleOpenCalendar = () => {
    //     isShow(this.state => !state)
    // }

    // const handleCloseCalendar = () => {
    //     if (this.state.isShow) {
    //         this.setState({isShow: false});
    //     }
    // }

    // const handlePreviousMonth = () => {
    //     const newMonth = this.state.month === 0 ? 11 : this.state.month - 1;
    //     const newYear = this.state.month === 0 ? this.state.year - 1 : this.state.year;
    //     this.setState(state => ({
    //         ...state,
    //         month: newMonth,
    //         year: newYear,
    //     }));
    // }

    // const handleTodayMonth = () => {
    //     month(state => {
    //         month: new Date().getMonth(),
    //             year: new Date().getFullYear(),
    //     }
    //     );
    // }

    // const handleNextMonth = () => {
    //     const newMonth = this.state.month === 11 ? 0 : this.state.month + 1;
    //     const newYear = this.state.month === 11 ? this.state.year + 1 : this.state.year;
    //     this.setState(state => ({
    //         ...state,
    //         month: newMonth,
    //         year: newYear,
    //     }));
    // }

    // const handleChangeDate = (day: string | number) => {
    //     const {onChange, id} = this.props;
    //     const {month, year} = this.state;
    //     onChange({
    //         currentTarget: {
    //             id,
    //             type: 'text',
    //             value: `${makeDayMonthForDate(1/*day */)}.${makeDayMonthForDate(month)}.${year}`,
    //         },
    //     } as React.SyntheticEvent<HTMLInputElement>);
    // };

    const calendar = getMonthPage(1, 2021/* month, year */);
    // const monthToday = new Date().getMonth();
    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];

    return (
        <div className={CONTAINER_CLASS} /* onClick={handleOpenCalendar } */ >
            <label>
                {label}
            </label>
            <input id={id} type="text" value={value} className="DateInput form-control mb-3" /* {...props} */ />
            {/* isShow && */(
                <div className="calendar__window">
                    <div className="calendar__body">
                        <div className="d-flex justify-content-center">
                            <span className="btn page-link d-flex align-items-center page-item" /* onClick={ handlePreviousMonth }*/>
                                <FontAwesomeIcon
                                    icon={fasChevronLeft}
                                    fixedWidth
                                />
                            </span>
                            <span /* onClick={handleTodayMonth }*/ className="btn page-link font-weight-bold">{monthNames[1/*month */]} {2 /*year */}</span>
                            <span className="btn page-link d-flex align-items-center" /* onClick={ handleNextMonth } */>
                                <FontAwesomeIcon
                                    icon={fasChevronRight}
                                    fixedWidth
                                />
                            </span>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    {days.map((dayName, dayId) => (
                                        <th
                                            key={dayId}
                                            className={dayName === 'сб' || dayName === 'вс' ? "text-danger" : "text-primary"}>
                                            {dayName}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody id="days">
                                {calendar.map((rowDays, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {/* {rowDays.map((day, dayIndex) => (
                                        <DayCell
                                            key={dayIndex}
                                            day={day}
                                            today={today}
                                            month={month}
                                            monthToday={monthToday}
                                            rowDays={rowDays}
                                            onClick={handleChangeDate}
                                        />
                                    ))} */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
export default DateInput;
