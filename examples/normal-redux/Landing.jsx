import React from 'react';
import { inject } from '@devspace/induxion';

class Landing extends React.Component {
    static getStates = ['example'];
    static getActions = ['actionChangeExample'];

    componentDidMount = () => {
        console.log('==REDUX PROPS', this.props);
    }

    render = () => {

        const { example, actionChangeExample } = this.props;

        return (
            <div>
                <h1>Hello world from induxion!</h1>
                <h2>The title are: { example.title }</h2>

                <button type="button" onClick={() => actionChangeExample('New title from Induxion')}>Change Example</button>
            </div>
        );
    };
}

export default inject(Landing);
