import React from 'react';
import { inject } from '../../src/index';

class Landing extends React.Component {
  static getStates = {
    title: 'exampleAPPS.title',
    animals: 'exampleAPPS.animals.data'
  };
  static getActions = ['actionChangeExampleAPPS', 'actionFetchExampleAPPS'];

  componentDidMount = () => {
    console.log('==REDUX PROPS', this.props);
  };

  render = () => {
    const {
      title,
      animals = [],
      actionChangeExampleAPPS,
      actionFetchExampleAPPS
    } = this.props;

    return (
      <div>
        <h1>Hello world from induxion!</h1>
        <h2>The title are: {title}</h2>

        <button
          type="button"
          onClick={() => actionChangeExampleAPPS('New title from Induxion')}
        >
          Change Example
        </button>
        <button onClick={actionFetchExampleAPPS}>Get My Animals</button>

        <ul>
          {animals.map((list, key) => (
            <li key={key}>{list}</li>
          ))}
        </ul>
      </div>
    );
  };
}

export default inject(Landing);
