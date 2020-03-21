import React, { Component } from 'react'
import './AppHeader.css';
import { Button } from 'reactstrap';

// cheatsheet https://devhints.io/react
export default class AppHeader extends Component {
  // cheatsheet https://devhints.io/wip/intl-datetime
  opt: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    year: 'numeric',
    month: 'long',
  };
  locale = 'default'; // browser's default locale
  currDate = new Intl.DateTimeFormat(this.locale, this.opt).format(new Date());

  render() {
    return (
      <div className="col-sm-12">
        <div className="jumbotron p-3">
          <h1 className="display-3">
            Nyheter!
          </h1>
          <p className="lead">
            Datum: {this.currDate},
            Vecka: {1}
          </p>
          <Button
            color="primary"
            onClick={e=>this.toggleAll(e)}>
              Toggle
          </Button>
          <Button
            color="success"
            onClick={e=>this.showAll(e)}>
              Show All
          </Button>
          <Button
            color="warning"
            onClick={ (e) => this.hideAll(e) }>
              Hide All
          </Button>
        </div>
      </div>
    )
  }
  toggleAll(e: React.MouseEvent<any, MouseEvent>): void {
    // $(".collapse").collapse('toggle');
  }
  showAll(e: React.MouseEvent<any, MouseEvent>): void {
    // $(".collapse").collapse('show');
  }
  hideAll(e: React.MouseEvent<any, MouseEvent>): void {
    // $(".collapse").collapse('hide'); 
  }
  
}