import React, {Component, lazy, Suspense } from 'react';
const Projects = React.lazy(() => import('./Projects'));

class App extends Component {
  render(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
          <Projects/>
        </Suspense>
    )
  }
}

export default App;
