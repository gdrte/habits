import React from 'react'
import ReactDOM from 'react-dom'

class Icon extends React.Component {

  className() {
    return [this.props.className, 'Icon'].join(' ')
  }

  render() {
    switch(this.props.name) {
      case "accept":
        return (
          <svg className={this.className()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path d="M26.109 8.844c0 .391-.156.781-.438 1.062L12.233 23.344c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438l-7.781-7.781c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062l2.125-2.125c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l4.594 4.609 10.25-10.266c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l2.125 2.125c.281.281.438.672.438 1.062z"/>
          </svg>
        )
      case "cancel":
        return (
          <svg className={this.className()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 28">
            <path d="M20.281 20.656c0 .391-.156.781-.438 1.062l-2.125 2.125c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438L11 19.249l-4.594 4.594c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438l-2.125-2.125c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062L6.751 15l-4.594-4.594c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062l2.125-2.125c.281-.281.672-.438 1.062-.438s.781.156 1.062.438L11 10.751l4.594-4.594c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l2.125 2.125c.281.281.438.672.438 1.062s-.156.781-.438 1.062L15.249 15l4.594 4.594c.281.281.438.672.438 1.062z"/>
          </svg>
        )
      case "edit":
        return (
          <svg className={this.className()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M15 16H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h10L9 2H2v12h12V7l2-2v10a1 1 0 0 1-1 1zM4 12V9l9-9h1l2 2v1l-9 9H4zm4.5-3.5L14 3l-1-1-5.5 5.5 1 1zM6 9l-1 1v1h1l1-1-1-1z"/>
          </svg>
        )
      case "streak":
        return (
          <svg className={this.className()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 28">
            <path d="M13.828 8.844a.62.62 0 0 1 .109.688L5.5 27.61a.745.745 0 0 1-.656.391c-.063 0-.141-.016-.219-.031-.344-.109-.547-.438-.469-.766l3.078-12.625L.89 16.157c-.063.016-.125.016-.187.016a.765.765 0 0 1-.484-.172.614.614 0 0 1-.203-.609L3.157 2.501c.078-.297.359-.5.688-.5H8.97c.391 0 .703.297.703.656a.634.634 0 0 1-.078.281l-2.672 7.234 6.188-1.531a.77.77 0 0 1 .187-.031.76.76 0 0 1 .531.234z"/>
          </svg>
        )
      case "achievement":
        return (
          <svg className={this.className()} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M17 3h-3V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H1a1 1 0 0 0-1 1v2c0 1.607 1.065 4 4 4h.419A5.011 5.011 0 0 0 8 12.9V15H7a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2h-1v-2.1a5.01 5.01 0 0 0 3.581-2.9H14c2.935 0 4-2.393 4-4V4a1 1 0 0 0-1-1zM4 8C2.174 8 2.008 6.464 2 6V5h2v3zm8 .624l-.251.575A3 3 0 0 1 9 11a3.002 3.002 0 0 1-2.749-1.801L6 8.624V3h6v5.624zM16 6c0 .334-.097 2-2 2V5h2v1z"/><path d="M14.022 10.022c.015 0 .017-.005-.022-.022v.02a.222.222 0 0 0 .022.002zM3.978 10.022L4 10.02V10c-.04.017-.038.022-.022.022z"/>
          </svg>
        )
    }
  }
}

export default Icon
