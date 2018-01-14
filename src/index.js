import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import IndexHeader from './IndexHeader'




class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'dev'
    }
  }

  render() {

    return (
      <div className="view">
        <IndexHeader title={this.state.title}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
