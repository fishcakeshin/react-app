
import { Component } from 'react';
import TOC from './components/TOC.js'
import Content from './components/Content.js'
import Subject from './components/Subject.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      subject:{title:'WEB', sub:'World Wid Web!'}
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );
  }
}

export default App;
