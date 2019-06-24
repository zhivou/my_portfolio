import React from 'react';
import Launches from './launches/Launches';
import LeftNavBar from './LeftNavBar';
import 'semantic-ui-css/semantic.min.css'

//Build Main Component here. Like LeftNavBar. Main View for each
// section etc...
const App = () => (
    <div>
      <LeftNavBar/>
      <Launches/>
    </div>
);

export default App;
