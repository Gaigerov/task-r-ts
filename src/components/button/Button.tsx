import React from 'react';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    styleType: string;
    buttonName: string;
};

class Button extends React.Component<Props> {
    render() {
        const {styleType = 'primary', buttonName, ...props} = this.props;

        const classButtonName = `btn btn-${styleType} w-50 ml-1 mr-1`;

        return (
            <button className={classButtonName}{...props}>{buttonName}</button>
        );
    }
}

export default Button;
