import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class FacebookList extends Component {
  render() {
    return (
      <FacebookProvider appId="2025869981129330" chatSupport>
        <CustomChat pageId="107401024287642" minimized={true}/>
      </FacebookProvider>    
    );
  }
}