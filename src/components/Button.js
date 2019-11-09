import React from 'react';

export default class Button extends React.Component {
    render() {
        const {text, click, styles} = this.props;

        return (
            <button className={styles} onClick={click}>
                {text}
            </button>
        )
    }
}