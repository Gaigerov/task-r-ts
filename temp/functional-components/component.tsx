import React, {useState} from 'react';
import {useSelector} from 'react-redux';

type OwnProps = {
    title: string;
    text: string;
};

type ConnectedProps = {
    tasksOnPage: number;
};

type Props = OwnProps & ConnectedProps;

type State = {
    isLiked: boolean;
};

export class Card extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            isLiked: false,
        };
    }

    toggleLike() {
        this.setState(state => ({
            isLiked: !state.isLiked,
        }))
    }

    render() {
        const {title, text, tasksOnPage} = this.props;
        const {isLiked} = this.state;

        return (
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <button onClick={this.toggleLike}>{isLiked ? '+' : '-'}</button>
                <span>{tasksOnPage}</span>
            </div>
        );
    }
}

const mapStateToProps = (state: ConnectedProps): ConnectedProps => {
    return {
        tasksOnPage: state.tasksOnPage,
    };
};



const Card2: React.FC<OwnProps> = ({title, text}) => {
    const [isLiked, setLiked]= useState(false);

    const tasksOnPage = useSelector((store: ConnectedProps) => store.tasksOnPage);

    const toggleLike = () => {
        setLiked(state => !state);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <button onClick={toggleLike}>{isLiked ? '+' : '-'}</button>
            <span>{tasksOnPage}</span>
        </div>
    );
};
