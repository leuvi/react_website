import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      nav: [
        {
          name: '首页',
          link: '/',
          meta: 'home'
        }, {
          name: '产品',
          link: '/product',
          meta: 'product'
        }, {
          name: '解决方案',
          link: '/solution',
          meta: 'solution'
        }, {
          name: '服务支持',
          link: '/support',
          meta: 'support'
        }, {
          name: '关于',
          link: '/about',
          meta: 'about'
        }
      ]
    }
  }
  render() {
    const headerStyle = this.props.active === 'home' ? 'header' : 'header child'
    return (
      <div className={headerStyle}>
        <div className="inner">
          <div className="logo">React website</div>
          <ul className="nav">
            {
              this.state.nav.map((value, key) => {
                return (
                  <li key={key} className={this.props.active === value.meta ? 'active' : ''}>
                    <Link to={value.link}>{value.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Header