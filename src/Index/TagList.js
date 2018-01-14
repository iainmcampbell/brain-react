import React from 'react'
import classnames from 'classnames'

import 'Index/TagList.sass'

export default class TagList extends React.Component {
  constructor(props){
    super(props)

    this.tagClassNames = function(tag){
      return classnames({
        'taglist-tag': true,
        'is-active': this.props.activeTag === tag.name
      })
    }
  }

  render(){
    return (
      <div className="taglist">
        {this.props.tags.map(tag =>
          <div className={this.tagClassNames.call(this,tag)} key={tag.name} onClick={this.props.setActiveTag.bind(this, tag)}>{tag.name}</div>
        )}
      </div>
    )
  }
}