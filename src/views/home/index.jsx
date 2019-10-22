import React from 'react'
import Wrap from '@components/UI/wrap/index.jsx'
import { Carousel, Button, Icon } from 'antd'
import './style.less'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrap active="home">
        <div className="home">
          {/* 滚动图 */}
          <div className="swipe">
            <Carousel autoplay={true}>
              <div className="swipe-item">
                <div className="bgimg">
                  <img src='http://1.sweetui.com/pic/reactwebsite/s1.jpg' />
                </div>
                <div className="descripe">
                  <h3>标题11222</h3>
                  <p>文字描述1文字描述1文字描述1</p>
                  <p>
                    <Button type="primary" icon="download" size="large">
                      点我下载
                    </Button>
                  </p>
                </div>
              </div>
              <div className="swipe-item">
                <div className="bgimg">
                  <img src='http://1.sweetui.com/pic/reactwebsite/s2.jpg' />
                </div>
                <div className="descripe">
                  <h3>标题2</h3>
                  <p>文字描述2文字描述2文字描述2</p>
                </div>
              </div>
              <div className="swipe-item">
                <div className="bgimg">
                  <img src='http://1.sweetui.com/pic/reactwebsite/s3.jpg' />
                </div>
                <div className="descripe">
                  <h3>标题3</h3>
                  <p>文字描述3文字描述3文字描述3</p>
                </div>
              </div>
            </Carousel>
          </div>
          {/* 说明1 */}
          <div className="desblock">
            <div className="content">
              <h2>我们的数据</h2>
              <p>智能化 丨 一体化 丨 场景化 丨 价值化</p>
              <ul className="icondata">
                <li>
                  <Icon type="apple" />
                  <p>1000</p>
                </li>
                <li>
                  <Icon type="android" />
                  <p>920</p>
                </li>
                <li>
                  <Icon type="windows" />
                  <p>52</p>
                </li>
                <li>
                  <Icon type="slack" />
                  <p>362</p>
                </li>
              </ul>
            </div>
          </div>
          {/* 说明2 */}
          <div className="desblock dark">
            <div className="content">
              <h2>他们都在使用</h2>
              <ul className="usedata">
                <li>
                  <img src='http://1.sweetui.com/pic/reactwebsite/sy1.png' />
                  <h3>XX公司</h3>
                  <p>我们希望拥有一个全场景的智能客服系统与我们的客户进行及时沟通，极大的改善了我们的服务体验和业务支撑，感谢服务团队</p>
                  <p className="sign">—— 客服部经理·XXX</p>
                </li>
                <li>
                  <img src='http://1.sweetui.com/pic/reactwebsite/sy2.png' />
                  <h3>XX公司</h3>
                  <p>在确保我们能及时有效响应客户的需求，还提供了智能回访、智能催收等业务场景的解决方案，同时在数据安全和稳定性方面发挥了关键作用</p>
                  <p className="sign">—— CTO·XXX</p>
                </li>
                <li>
                  <img src='http://1.sweetui.com/pic/reactwebsite/sy3.png' />
                  <h3>XX公司</h3>
                  <p>集成非常方便，可以对接各条业务线，实现机器人精准应答、自助服务，满足了团队最复杂的业务需求，极大的提升了服务效率</p>
                  <p className="sign">—— 技术负责人·XXX</p>
                </li>
              </ul>
            </div>
          </div>
          {/* 说明3 */}
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

export default Home