import React from 'react';
import '../../assets/css/bmrCalc.css';

export default class BMRCalc extends React.Component{
  constructor(props){
    super(props);
    this.state={
      bmr: 0,
      tde: 0,
      workout: 1.2
    };
    var _this=this;
     this.handleInputChange = this.handleInputChange.bind(this);
  }
 
  handleInputChange(e){
    console.log(e.target);
    this.setState({[e.target.name]: e.target.value})
  }
  
  calcBMR=()=>{
    var bmr,tde;
    if(this.state.sex=='male'){
      bmr=66.47+(13.75*parseFloat(this.state.weight))+(5.003 * (30.48*parseInt(this.state.htFoot) + 2.54* parseInt(this.state.htInch)))-(6.755*parseInt(this.state.age));
    }
    else
      bmr=655.1+(9.563*parseFloat(this.state.weight))+(1.85  * (30.48*parseInt(this.state.htFoot) + 2.54* parseInt(this.state.htInch)))-(4.676*parseInt(this.state.age));
    
    this.setState({bmr: parseInt(bmr)})
    this.setState({tde: parseInt(bmr*parseFloat(this.state.workout))})
  }
   
  render(){
    return (
      <section className="bmrCalc">
        <div className="bmrContainer">
          <div className="row">
            <div className="col heightIp">
              <label>Height</label>
              <div className="row">
                <div className="col">
                  <input name="htFoot" type="number" className="form-control" onChange={this.handleInputChange}></input>
                  ft.
                </div>
                <div className="col">
                  <input name="htInch" type="number" className="form-control" onChange={this.handleInputChange}></input>
                  in.
                </div>
               
              </div>
            </div>
             <div className="col">
                    <div className="row">
                      <div className="col" style={{paddingRight: 0}}>
                        <label>Weight</label>
                        <div>
                          <input name="weight" type="number" className="form-control" onChange={this.handleInputChange} style={{width: '77%', display: 'inline',marginRight: '4px'}}></input>
                          kg
                        </div>
                      </div>
                      <div className="col">
                        <label>Age</label>
                        <input name="age" type="number" className="form-control" onChange={this.handleInputChange}></input>
                      </div>
                    </div>
              </div>
            
          </div>
          <div className="row">
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