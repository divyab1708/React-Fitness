import '../../assets/css/nouislider.min.css';
import React from 'react';
import '../../assets/css/bmrCalc.css';
import $ from 'jquery';
//import '../../assets/js/rangeslider.min.js';
import rangeslider from 'rangeslider.js';
import noUiSlider from 'nouislider';
export default class BMRCalc extends React.Component{
  constructor(props){
    super(props);
    this.state={
      bmr: 0,
      tde: 0,
      workout: 1.2,
      height: 0,
      weight: 0, 
      age: 0
    };
    var _this=this;
     this.handleInputChange = this.handleInputChange.bind(this);

  }
 componentDidMount(){
     var heightRange = document.getElementById('heightRange');
      noUiSlider.create(heightRange, {
          start: [0],
        step: 1,
          range: {
              'min': [0],
              'max': [220]
          }
      });
       var _this=this;
       heightRange.noUiSlider.on('update', function (values, handle) {
          _this.setState({height: parseInt(values[0])})
        });
   
      var weightRange = document.getElementById('weightRange');
      noUiSlider.create(weightRange, {
          start: [0],
        step: 1,
          range: {
              'min': [0],
              'max': [150]
          }
      });
       var _this=this;
       weightRange.noUiSlider.on('update', function (values, handle) {
          _this.setState({weight: parseInt(values[0])})
        });
   
      var ageRange = document.getElementById('ageRange');
      noUiSlider.create(ageRange, {
          start: [0],
        step: 1,
          range: {
              'min': [0],
              'max': [100]
          }
      });
       var _this=this;
       ageRange.noUiSlider.on('update', function (values, handle) {
          _this.setState({age: parseInt(values[0])})
        });
 }
  handleInputChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  
  calcBMR=()=>{
    var bmr,tde;
    if(this.state.sex=='male'){
      bmr=66.47+(13.75*this.state.weight)+(5.003 * this.state.height)-(6.755*this.state.age);
    }
    else
      bmr=655.1+(9.563*this.state.weight)+(1.85  * this.state.height)-(4.676*this.state.age);
    
    this.setState({bmr: parseInt(bmr)})
    this.setState({tde: parseInt(bmr*parseFloat(this.state.workout))})
  }
   
  render(){
    return (
      <section className="bmrCalc">
        
        <div className="bmrContainer">
          <div className="row">
            <div className="col">
              <label>Height </label><span className="float-right">{this.state.height} cm</span>
              <div id="heightRange"></div>
            </div>
            <div className="col">
              <label>Weight </label><span className="float-right">{this.state.weight} kg</span>
              <div id="weightRange"></div>
            </div>
            
          </div>
          
          <div className="row">
            <div className="col">
              <label>Age </label><span className="float-right">{this.state.age} years</span>
              <div id="ageRange"></div>
            </div>
            <div className="col">
              <label>Sex</label>
              <div className="row">
                <div className="col">
                  <input type="radio"  name="sex" value="male" onChange={this.handleInputChange}></input> Male
                </div>
                <div className="col">
                  <input type="radio"  name="sex" value="female" onChange={this.handleInputChange}></input> Female
                </div>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col">
              <label>Workout</label>
              <select className="form-control" name="workout" onChange={this.handleInputChange}>
                <option value="1.2">Sedentary (little to no exercise + work a desk job)</option>
                <option value="1.375">Lightly Active (light exercise 1-3 days / week) </option>
                <option value="1.55">Moderately Active (moderate exercise 3-5 days / week) </option>
                <option value="1.75">Very Active (heavy exercise 6-7 days / week) </option>
                <option value="1.9">Extremely Active (very heavy exercise, hard labor job, training 2x / day) </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col result">
              <button className="btn btn-primary" onClick={this.calcBMR}>Calculate</button>
              <div>
                 <br></br>
                  <strong>BMR:</strong><span> {this.state.bmr} kcals</span> &nbsp;&nbsp;
                  <strong>TDE:</strong><span> {this.state.tde} kcals</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}