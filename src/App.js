import React from 'react'
import './App.css'
import Header from './components/Header'
import FeatureCard from './components/FeatureCard';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <>
      <Header />
      <section className="features container">
        <FeatureCard image={icon1} name="Declarative" description="React makes it paintless to create interactive UIs."/>
        <FeatureCard image={icon2} name="Components" description="Build encapsulated components that manage their state."/>
        <FeatureCard image={icon3} name="Single-Way" description="A set of immutable values are passed to the component's."/>
        <FeatureCard image={icon4} name="JSX" description="Statically-typed, designed to run on modern browsers."/>
      </section>
    </>
  );
}

export default App;
