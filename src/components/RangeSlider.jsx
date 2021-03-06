import React, { Component } from 'react'
import numeral from 'numeral'

if (typeof window !== 'undefined') {
  require('./RangeSlider.css')
  require('./atomic.css')
}

class RangeSlider extends Component {
  constructor(props) {
    super()
    this.state = {
      min: props.min,
      max: props.max,
      minElement: null,
      maxElement: null,
      minRange: props.minRange || 500
    }
  }

  componentDidMount() {
    var min = this.props.minValue || this.props.min
    var max = this.props.maxValue || this.props.max
    this.state.minElement.value = min
    this.state.maxElement.value = max
    this.setState({min: min, max: max})
  }

  componentWillReceiveProps(props) {
    var min = this.props.minValue || this.props.min
    var max = this.props.maxValue || this.props.max
    this.state.minElement.value = min
    this.state.maxElement.value = max
    this.setState({min: min, max: max})
  }

  render() {
    return (
      <div style={this.props.style} className={this.props.className + ' W(100%)'}>
        {/*display range start number*/}
        <div className="D(ib) C(#4e5b65)">
          {numeral(this.state.min).format('0,0')}
        </div>
        {/*display range end number*/}
        <div className="D(ib) Fl(end) C(#4e5b65)">
          {numeral(this.state.max).format('0,0')}
        </div>

        <div
          style={this.props.style}
          className={this.props.ClassName + ' range-slider Pos(r) Ta(c) H(35px)'}>
          <input
            onChange={
              (ev) => {
                if(ev.target.value < this.state.max - this.state.minRange) {
                  this.setState(
                    { min: parseInt(ev.target.value) },
                    () => this.props.onChange(this.state)
                  )
                }
                else {
                  this.state.minElement.value = this.state.min;
                  this.setState(
                    { min: parseInt(this.state.min) },
                    () => this.props.onChange(this.state)
                  )
                }
              }
            }
            ref={(el)=>{this.state.minElement = el}}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            type="range"
          />
          <input
            onChange={
              (ev) => {
                if(ev.target.value > this.state.min + this.state.minRange) {
                  this.setState(
                    { max: parseInt(ev.target.value) },
                    () => this.props.onChange(this.state)
                  )
                }
                else {
                  this.state.maxElement.value = this.state.max;
                  this.setState(
                    { max: parseInt(this.state.max) },
                    () => this.props.onChange(this.state)
                  )
                }
              }
            }
            ref={ (el) => {this.state.maxElement = el} }
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            type="range"
          />
          <div style={{
            position: 'absolute',
            boxSizing: 'border-box',
            width: '100%',
            paddingLeft: '8px',
            paddingRight: '8px',
            top: '7px'
          }}>
            <div style={{
              marginLeft: (this.state.min - this.props.min)/(this.props.max - this.props.min)*100 + '%',
              width: (100-(this.state.min - this.props.min + this.props.max - this.state.max)/(this.props.max - this.props.min)*100) + '%', 
              height: '4px',
              backgroundColor: '#5FCCC7'
            }}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RangeSlider
