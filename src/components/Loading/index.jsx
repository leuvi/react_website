import React from 'react'
import { Spin } from 'antd'
import './index.less'

class Loading extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    const tip = this.props.tip || '加载中...'
    return (
      <div className="overpage">
        <Spin tip={tip} size="large"></Spin>
      </div>
    )
  }
}

export default Loading