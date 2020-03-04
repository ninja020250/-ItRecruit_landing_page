import {Body} from './Body';
import CopyRight from '../CopyRight'
import {Footer} from '../../Component/Homepage/Footer';
import {Header} from './Header';
import React from 'react';

export class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="services " id="services">
          <Header/>
          <Body/>
          {/* <Footer/>
          <CopyRight/> */}
      </div>
    );
  }
}

