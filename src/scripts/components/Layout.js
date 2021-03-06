import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
