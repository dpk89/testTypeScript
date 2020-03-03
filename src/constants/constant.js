  export const generateData  = async (regionCount,siteCount,activityCount,workstationCount)=>{
    let data = []
    for(let i = 0;i<regionCount;i++){
      data.push({
        title:`Region ${i+1}`,
        id: Math.random().toString(36).slice(2),
        site: await generateSiteData(siteCount,activityCount,workstationCount)
      })
    }
    return data;
  }


  const generateSiteData = async (siteCount,activityCount,workstationCount) => {
    let siteData = []
    for(let i = 0;i<siteCount;i++){
      siteData.push({
        title:`Sites ${i+1}`,
        id: Math.random().toString(36).slice(2),
        activity: await generateActivityData(activityCount,workstationCount)
      })
    }
    return siteData;
  }

  const generateActivityData = async (activityCount,workstationCount) => {
    let activityData = []
     for(let i = 0;i<activityCount;i++){
      activityData.push({
        title:`Activity ${i+1}`,
        id: Math.random().toString(36).slice(2),
        workStation: await generateWorkstationCount(workstationCount)
      })
    }
    return activityData;
  }

  const generateWorkstationCount = async  (workstationCount) => {

    let workStation = []
    for(let i = 0;i<workstationCount;i++){
     await workStation.push({
        title:`Workstation Title ${i+1}`,
        id: Math.random().toString(36).slice(2),
      })
    }
    return workStation;
  }