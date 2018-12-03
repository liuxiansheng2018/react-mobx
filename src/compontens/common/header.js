/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:24:11
 * @version 0.0.1
  */
// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import {Menu} from 'antd';

// export default class Header extends Component {
//   constructor(porps) {
//     super(porps);

//     this.state = {
//       current: this.props.pathname === '/'
//         ? '/index'
//         : this.props.pathname
//     }
//   }

//   handleClick(e) {
//     if(e.key !== this.state.current)
//       this.setState({current: e.key});
//   }

//   render() {
//     return (
//       <Menu
//         onClick={this
//         .handleClick
//         .bind(this)}
//         selectedKeys={[this.state.current]}
//         mode="horizontal">
//         <Menu.Item key="/index">
//           <Link to="/">
//             <span>首页</span>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/items">
//           <Link to="/items">
//             <span>文章</span>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/about">
//           <Link to="/about">
//             <span>关于</span>
//           </Link>
//         </Menu.Item>
//       </Menu>
//     )
//   }
// }

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import PropTypes from 'prop-types'


class Header extends PureComponent {
  static PropTypes = {
    pathname: PropTypes.string
  }
  state = {
    current: this.props.pathname === '/' ? '/index' : this.props.pathname
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    if( e.key !== this.state.current ) this.setState({current: e.key});
  }

  render () {
    return (
     // <React.Fragment>
        <Menu
          onClick= {this.handleClick}
          selectedKey={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="/index">
            <Link to="/">
              <span>首页</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="/items">
            <Link to="/items">
              <span>文章</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="/about">
            <Link to="/about">
              <span>关于</span>
            </Link>
          </Menu.Item>
        </Menu>
    //  </React.Fragment>
    )
  }
}

export default Header
