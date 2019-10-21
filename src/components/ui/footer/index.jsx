import React from 'react'
import { BackTop } from 'antd'
import './index.less'

const Footer = function() {
  return (
    <div className="footer">
      <BackTop />
      <div className="content">
        <ul>
          <li>
            <h2>产品</h2>
            <p>React-website</p>
            <p>React-admin</p>
            <p>Vue-website</p>
            <p>Vue-admin</p>
          </li>
          <li>
            <h2>联系我们</h2>
            <p>528046@qq.com</p>
            <p>周一至周日 9:00～21:00</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer