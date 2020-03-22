import React, { Component } from 'react';
import './FeedHeader.css'

interface IFeedHeaderProps {
  feedindex: number,
  hint: string,
  name: string,
}

 export default class FeedHeader extends Component<IFeedHeaderProps> {
  // static defaultProps: IFeedHeaderProps = {
  //   feedindex: 0,
  //   hint: '##hint##',
  //   name: '##name##',
  // }

  render() {
    const { feedindex, hint, name} = this.props;
    return (
          <h3
            title={hint}
            className="feed-header display-5"
            id={`rss-feeds${feedindex}`}
          >
            {name}
          </h3>
    )
  }
}