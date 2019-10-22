import React from 'react'
import Wrap from '@components/UI/wrap/index.jsx'
import { Icon } from 'antd'
import './style.less'

class About extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrap active="about" {...this.props}>
        <div className="about">
          <div className="top">
            <div className="content">
              <h3>关于我们</h3>
            </div>
          </div>
          <div className="desblock">
            <div className="content">
              <h2>360°全方位 陪伴式贴心服务</h2>
              <p>因为用心，所以必将做得更好</p>
              <ul className="icondata2">
                <li>
                  <Icon type="pie-chart" />
                  <p>1对1技术顾问及时响应</p>
                </li>
                <li>
                  <Icon type="dot-chart" />
                  <p>全天售后服务支持</p>
                </li>
                <li>
                  <Icon type="cloud-download" />
                  <p>一体化培训实施方案</p>
                </li>
                <li>
                  <Icon type="gateway" />
                  <p>创新裂变计划</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrap>
    )
  }
}

export default About