import React from 'react'

import './index.sass'

import IndexHeader from './IndexHeader'
import TagList from './TagList'
import SnippetList from './SnippetList'
import ArticleList from './ArticleList'

import config from 'config'

export default class Index extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'dev',

      tags:     [],
      snippets: [],
      articles: [],

      activeTag: null,
    }

    // fetch data
    fetch(config.serverUrl + '/api')
      .then(res => res.json())
      .then(res => {
        console.log(res)

        let tags = res.tags.tags.map(tag => {
          return {
            name:   tag,
            count:  parseInt( res.tags.counts[tag], 10 ),
            active: false,
          }
        })

        this.setState({
          tags,
          snippets: res.snippets,
          articles: res.articles,
        })
      })

    // pass on to child components

  }

  setActiveTag(tag){
    this.setState({ 'activeTag': tag.name })
  }

  render() {
    return (
      <div className="view index">
        <IndexHeader title={ this.state.title }/>

        <main>
          <TagList tags={ this.state.tags } activeTag={ this.state.activeTag } setActiveTag={ this.setActiveTag.bind(this) } />

          <div className="index-cols">
            <div className="index-col">
              <SnippetList />
            </div>
            <div className="index-col">
              <ArticleList />
            </div>
          </div>

        </main>
      </div>
    )
  }
}

