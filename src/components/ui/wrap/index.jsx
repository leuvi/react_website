import React from 'react'
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import './index.less'

class Wrap extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="wrap">
        <Header {...this.props} />
        {this.props.children}
        <Footer {...this.props} />
      </div>
    )
  }
}

export default Wrap