import React, { Component } from 'react'
import './AppHeader.css';
import { Button, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import i18n from '../../i18nSetup';

interface IAppHeaderState {
  dropdownOpen: boolean,
  currDate: string,
  currWeek: number
}

// cheatsheet https://devhints.io/react
export default class AppHeader extends Component<{}, IAppHeaderState> {
  // cheatsheet https://devhints.io/wip/intl-datetime
  opt: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    year: 'numeric',
    month: 'long',
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      dropdownOpen: false,
      currDate: new Intl.DateTimeFormat('default', this.opt).format(new Date()),
      currWeek: 1
    };
  }

  updateDate = (locale: string) => this.setState({ currDate: new Intl.DateTimeFormat(locale, this.opt).format(new Date()) });
  toggleDropDown = () => this.setState((state) => ({ dropdownOpen: !state.dropdownOpen }));
  setEnglishI18N = () => { i18n.changeLanguage("en"); this.updateDate(i18n.language); }
  setSwedishI18N = () => { i18n.changeLanguage("sv"); this.updateDate(i18n.language); }
  toggleAll = () => {
    // $(".collapse").collapse('toggle'); // jQuery bootstrap way
    // TODO find a better way of doing this, creates a bug with the collapse state.
    document.querySelectorAll(".collapse")
      .forEach(el => el.classList.toggle("show"));
  }
  showAll = () => {
    // $(".collapse").collapse('show');
    document.querySelectorAll(".collapse")
      .forEach(el => el.classList.add("show"));
  }
  hideAll = () => {
    // $(".collapse").collapse('hide'); 
    document.querySelectorAll(".collapse")
      .forEach(el => el.classList.remove("show"));

  }

  render() {
    const t = (key: string, values?: {}) => i18n.t(key, values); // fix, since quickstart guide is errorous
    const { dropdownOpen, currDate, currWeek } = this.state;
    return (
      <div className="col-sm-12">
        <div className="jumbotron p-3">
          <h1 className="display-3">
            {t('AppHeaderTitle')}
          </h1>
          <p className="lead">
            {t('AppHeaderLead', { currDate, currWeek})}
          </p>
          <ButtonGroup>
            <Button color="primary" onClick={this.toggleAll}>{t('Toggle')}</Button>
            <Button color="success" onClick={this.showAll}>{t('ShowAll')}</Button>
            <Button color="warning" onClick={this.hideAll}>{t('HideAll')}</Button>
          </ButtonGroup>
          <Dropdown isOpen={dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>{t("Language")}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.setEnglishI18N}>{t("English")}</DropdownItem>
              <DropdownItem onClick={this.setSwedishI18N}>{t("Swedish")}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    )
  }
}