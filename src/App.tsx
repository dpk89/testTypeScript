import React from 'react';
import './App.css';
import {  generateData } from './constants/constant';

interface Object { id: string; title: string; workStation:Array<Object> ; activity: Array<Object>,site: Array<Object> }

interface objectMain { id: string; title: string; }

export class App extends React.Component {

  state = {
    sitesToDisplay :[],
    activityToDisplay: [],
    arrayToMap:[],
    workspaceToDisplay:[]
  }

  async componentDidMount(){
    let array : objectMain[] = await generateData(3,3,2,2)
    this.setState({ arrayToMap : array })
  }

  onClickRegion = (item: string) => {
    let { sitesToDisplay } = this.state
    let list : string[] = []
    let index = sitesToDisplay.findIndex(val => val === item)
    if(index >= 0) {
     sitesToDisplay.splice(index, 1)
     this.setState({ sitesToDisplay })
    }else{
     list = sitesToDisplay
     list.push(item)
     this.setState({ sitesToDisplay : list })
    }
 }

  showSites = (data: Object) => {
    let  siteArray : String[] = this.state.sitesToDisplay
    if (siteArray.includes(data.id)) {
        return(
          data && data.site && data.site.length ?  data.site.map((value : Object, index : number ) => {
           return(
            <div key={index} >
              <div className="mainTextOut" >
                <div className="border" />
                <p onClick={() => this.onClickSites(value.id)}>
                    {value.title}
                </p>
              </div>
              {this.showActivities(value)}
            </div>
          )
        }) : null
      )
    }
  }

  onClickSites = (item: string) => {
    let { activityToDisplay } = this.state
    let list : string[] = []
    let index = activityToDisplay.findIndex(val => val === item)
    if(index >= 0) {
     activityToDisplay.splice(index, 1)
     this.setState({ activityToDisplay })
    }else{
     list = activityToDisplay
     list.push(item)
     this.setState({ activityToDisplay : list })
    }
  }

 
  showActivities = (data: Object) => {
    let  activityArray : String[] = this.state.activityToDisplay
    if (activityArray.includes(data && data.id)) {
        return(
          data && data.activity && data.activity.length ?  data.activity.map((value : Object, index : number ) => {
           return(
            <div key={index} className={index === 0 ? 'margin2' :'margin' }>
               <div className="mainTextOut" >
                <div className="border" />
                <p onClick={() => this.onClickActivities(value.id)}>
                   {value.title}
                </p>
                </div>
              {this.showWorkspace(value)}
            </div>
          )
        }) : null
      )
    }
  }

    onClickActivities = (item: string) => {
      let { workspaceToDisplay } = this.state
      let list : string[] = []
      let index = workspaceToDisplay.findIndex(val => val === item)
      if(index >= 0) {
      workspaceToDisplay.splice(index, 1)
      this.setState({ workspaceToDisplay })
      }else{
      list = workspaceToDisplay
      list.push(item)
      this.setState({ workspaceToDisplay : list })
      }
  }

  showWorkspace = (data: Object) => {
    let workSpaceArray : String[] = this.state.workspaceToDisplay
    if(workSpaceArray.includes(data && data.id)) {
        return(
          data && data.workStation && data.workStation.length ?  data.workStation.map((value : Object, index : number ) => {
           return(
            <div key={index}  className={index === 0 ? 'margin2' :'margin' }>
               <div className="mainTextOut" >
                <div className="border" />
                <p>
                {value.title}
                </p>
                </div>
            </div>
          )
        }) : null
      )
    }
  }


  render() {
    let { arrayToMap } = this.state
      return(
        <div className="mainContainer">
          <h1>Test TypeScript App</h1>
          {
            arrayToMap.map((val : Object, index : number) => {
              return(
                <div key={index}>
                  <p onClick={() => this.onClickRegion(val.id)} className="mainTitle">
                    {val.title}
                  </p>
                  <div className="marginTextTitle">
                    {this.showSites(val)}
                  </div>
                </div>
              )
            })
          }
        </div>
      )
  }
}
