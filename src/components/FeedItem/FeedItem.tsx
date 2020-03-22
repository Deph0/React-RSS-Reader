import React, { Component } from 'react';
import './FeedItem.css';

type FeedItemProps = {
  url: string,
  urlhint: string,
  title: string,
}

export default class FeedItem extends Component<FeedItemProps> {
  // static defaultProps: FeedItemProps = {
  //   url: '##url##',
  //   urlhint: '##urlhint##',
  //   title: '##title##'
  // }

  render() {
    const {url, title, urlhint} = this.props;
    return (
      <li className="feed-item">
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={urlhint}
        >
          {title}
        </a>
      </li>
    )
  }
}


