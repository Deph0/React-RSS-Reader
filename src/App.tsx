import React, { FunctionComponent, useEffect, useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import FeedGroup from './components/FeedGroup/FeedGroup';

const App: FunctionComponent = (props) => {
  let [rssConfig, setRssConfig] = useState([{title:"loading", url:"#loading"}]);

  // https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-functional-component
  useEffect(() => {
    fetch('./rss.json')
      .then(results => results.json())
      .then(data => {
        let obj = Object.entries(data).map(x => ({ title: x[0], url: (x[1] as string) }) );
        setRssConfig(obj);
      });
  }, []); // Pass empty array to only run once on mount.
  
  // rssConfig = [
  //   // { title: '', url: '' },
  //   { title: 'XKCD', url: 'https://xkcd.com/rss.xml' },
  //   { title: 'Nasa Breaking News', url: 'http://www.nasa.gov/rss/dyn/breaking_news.rss' },
  // ];
  
  var feedGroups = rssConfig.map((x,i) => 
    <FeedGroup key={i} title={x.title} feedindex={i} url={x.url}/>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <AppHeader />
      </div>
      <div className="row">
        {/* loop thu list of urls, get title and url, and index in list */}
        {feedGroups}
      </div>
    </div>
  );
}

export default App;

// ~/Desktop/currentdev/RRS-v2/react/rss-reder/src/components
// ☹  npx react-create component AppItem -d --css --jsx