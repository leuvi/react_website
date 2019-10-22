import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
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
          meta: 'product',
          children: [
            {
              name: '我的产品1',
              link: 'p1'
            }, {
              name: '我的产品2',
              link: 'p2'
            }, {
              name: '我的产品3',
              link: 'p3'
            },
          ]
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
  toHome() {
    this.props.history.push('/')
  }
  render() {
    const headerStyle = this.props.active === 'home' ? 'header' : 'header child'
    return (
      <div className={headerStyle}>
        <div className="inner">
          <div className="logo" onClick={this.toHome.bind(this)}>1React website</div>
          <ul className="nav">
            {
              this.state.nav.map((value, key) => {
                return (
                  <li key={key} className={this.props.active === value.meta ? 'active' : ''}>
                    {
                      value.children ?
                        <Dropdown overlay={
                          <Menu>
                            {value.children.map((v, k) => {
                              return (
                                <Menu.Item key={k}>
                                  <Link to={`/product/${v.link}`}>{v.name}</Link>
                                </Menu.Item>
                              )
                            })}
                          </Menu>
                        }>
                          <Link to={value.link}>
                            {value.name}<Icon type="down" />
                          </Link>
                        </Dropdown> :
                        <Link to={value.link}>{value.name}</Link>
                    }
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