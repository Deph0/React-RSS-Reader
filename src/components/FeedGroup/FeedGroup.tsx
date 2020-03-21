import React, { Component } from 'react';
// import * as rssParser from 'react-native-rss-parser';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import FeedItem from '../../components/FeedItem/FeedItem';
import { UncontrolledCollapse } from 'reactstrap';
import './FeedGroup.css';

interface IFeedGroupProps {
  title: string,
  feedindex: number,
  url: string,
}
interface IFeedGroupState {
  data: IFeedData,
  count: number
}

interface IFeedData {
  // responseData: {
  //   feed: {
  //     feedUrl: "https://xkcd.com/rss.xml",
  //     title: "xkcd.com",
  //     link: "https://xkcd.com/",
  //     description: "xkcd.com: A webcomic of romance and math humor.",
  //     author: "",
  //     entries: [
  //       {
  //         title: "Exa-Exabyte",
  //         link: "https://xkcd.com/2283/",
  //         content: "<img src="https://imgs.xkcd.com/comics/exa_exabyte.png" title="To picture 10^18, just picture 10^13, but then imagine you connect the left side of the 3 to close off the little bays." alt="To picture 10^18, just picture 10^13, but then imagine you connect the left side of the 3 to close off the little bays." />",
  //         contentSnippet: "",
  //         publishedDate: "2020-03-20T04:00:00.000Z",
  //         categories: [],
  //         author: "",
  //       }
  //     ]
  //   }
  // }
  feed?: {
    feedUrl: string,
    title: string,
    link: string,
    description: string,
    author: string,
    entries: [
      {
        title: string,
        link: string,
        content: string,
        contentSnippet: string,
        publishedDate: Date,
        categories: string[],
        author: string,
      }
    ]
  } 
}

export default class FeedGroup extends Component<IFeedGroupProps, IFeedGroupState> {
  state: IFeedGroupState;

  constructor(props: IFeedGroupProps) {
    super(props);
    this.state = { data: {}, count: 0 };
  }
  
  async componentDidMount() {
    // console.log("componentDidMount");
    var rssParserURL = "http://www.feedrapp.info/?q=";
    const response = await fetch(`${rssParserURL}${this.props.url}`);
    const json = await response.json();
    // console.log(json.responseData);
    // this.setState({ count: 2 });
    this.setState({ data: json.responseData });
    // this.setState((x) => { return { count: x.count + 1 }});
  }

  render() {
    const { title, feedindex } = this.props;
    const { feed } = this.state.data;
    const feedItems = feed?.entries.map(obj => 
       (<FeedItem url={obj.link} urlhint={obj.contentSnippet} title={obj.title} />)
    )

    return (
      <div className="col-sm-3">
        <div className="jumbotron p-3">
          <FeedHeader feedindex={feedindex} name={title} hint={feed?.description} />
          <UncontrolledCollapse toggler={`#rss-feeds${feedindex}`} className='collapse'>
            <div className="feed-container">
              {feedItems}
            </div>
          </UncontrolledCollapse>
        </div>
      </div>
    )
  }
}

// setState will trigger a new render
// and leaves the state you didnt update alone 
// (e.g. count will still be 0 when updating data)

// Used resources:
// https://itnext.io/how-to-properly-define-state-in-react-components-47544eb4c15d
// https://www.valentinog.com/blog/await-react/
// https://www.robinwieruch.de/react-fetching-data
// https://fettblog.eu/typescript-react/components/
// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet