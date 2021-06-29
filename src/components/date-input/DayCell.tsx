import React from 'react';

type Props = {
    day: string | number,
    today: number,
    month: number,
    monthToday: number,
    rowDays: (string | number)[],
    onClick: (day: string | number) => void,
};

const DayCell: React.FC<Props> = ({day, today, month, monthToday, rowDays, onClick}) => {
    const isToday = () => {
        return day === today && month === monthToday;
    }

    const isWeekand = () => {
        return day === rowDays[5] || day === rowDays[6];
    }

    const makeClass = () => {
        const className = [
            'cellOnHover'
        ];

        if (isToday()) {
            className.push('bg-primary', 'font-weight-bold');
        }

        if (isWeekand()) {
            className.push('text-danger');
        }

        return className.join(' ');
    }

    const handleClick = () => {
        onClick(day);
    }

    const className = makeClass();
    return (
        <td
            className={className}
            onClick={handleClick}
        >
            {day}
        </td>
    );
}

export default DayCell;
