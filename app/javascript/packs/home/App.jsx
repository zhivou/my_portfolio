import React, {Component, lazy, Suspense } from 'react';
const SkillsContainer = React.lazy(() => import('./skill_chart/SkillsContainer'));
const SoftSkillsContainer = React.lazy(() => import('./skill_chart/SoftSkillsContainer'));

class App extends Component {
  render(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
          <SkillsContainer/>
          <SoftSkillsContainer/>
        </Suspense>
    )
  }
}

export default App;
