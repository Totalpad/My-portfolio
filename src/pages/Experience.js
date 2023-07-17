import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from "@mui/icons-material/School"
import "../styles/Experience.css"
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#444444'>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2006-2018'
          iconStyle={{background:"#444444", color: "#fff"}}
          icon={<SchoolIcon />}
         >
          <h3 className='vertical-timeline-element-title'>Gymnasium № 3 Izyum, Kharkiv Oblast </h3>
          <h4 className='vertical-timeline-element-subtitle'> Izyum, Kharkiv Oblast UA</h4>
          <p>High School Diploma</p>
         </VerticalTimelineElement>

         <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date='2018 - 2019'
         iconStyle={{background:"#444444", color: "#fff"}}
         icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>V. N. Karazin Kharkiv National University</h3>
          <h4 className='vertical-timeline-element-subtitle'> Kharkiv UA</h4>
          <p>1 year foreign philology (English & Chinese) </p>
         </VerticalTimelineElement>

         <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date='2019 - 2022'
         iconStyle={{background:"#444444", color: "#fff"}}
         icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>O.M. Beketov National University of Urban Economy</h3>
          <h4 className='vertical-timeline-element-subtitle'> Kharkiv UA</h4>
          <p>Bachelor's degree in hotel, resort and tourist service management </p>
         </VerticalTimelineElement>


         <VerticalTimelineElement 
         className='vertical-timeline-element--work'
         date='2019 - 2020'
         iconStyle={{background:"#444444", color: "#fff"}}
         icon={<OutdoorGrillIcon />}>
          <h3 className='vertical-timeline-element-title'>Amata restaurant in Kharkiv</h3>
          <h4 className='vertical-timeline-element-subtitle'> Kharkiv UA</h4>
          <p>Worked as a Bartender (2 month) and Chef (8 month) </p>
         </VerticalTimelineElement>

         <VerticalTimelineElement 
         className='vertical-timeline-element--work'
         date='2020 - present'
         iconStyle={{background:"#00d1cd", color: "#fff"}}
         icon={<LocalShippingIcon />}>
          <h3 className='vertical-timeline-element-title'>Logity</h3>
          <h4 className='vertical-timeline-element-subtitle'> Kharkiv UA</h4>
          <p>Currently working as Logistics Coordinator (USA trucking)  </p>
         </VerticalTimelineElement>



         

      </VerticalTimeline>
    </div>
  )
}

export default Experience
