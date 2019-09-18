import React, { Fragment } from 'react';
import Landing from './Landing';
import { Wrapper, inject } from '@devspace/induxion';

// Set pages. Usually, we have to call the "inject" in our routes method
// So, we can keep the base index for all pages as clean as possible
const LandingPage = inject(Landing);

class App extends React.Component {
    render = () => {
        return (
            <Fragment>
                <Wrapper>
                    <LandingPage />
                </Wrapper>
            </Fragment>
        );
    }
}
export default App;