import './StudentServices.css'
import { Container } from 'react-bootstrap';
import InfoStudentServiceCard from '../../components/StudentSectionServices/InfoStudentServiceCard/InfoStudentServiceCard';
import { Axios } from '../../api/axios';
import { useEffect, useState } from 'react';
import MainButton from '../../components/SharedComponents/MainButton/MainButton'
import img1 from '../../images/StudentServices/img.jpg'
import TabTitle from '../../utils/TabTitle';
const StudentServices = () => {
  
    TabTitle('Spark | Student services');
    const studentServices = [
        {
          title: 'Students projects',
          img: img1,
          url: '/student-projects'
        },
        {
          title: 'Student Courses',
          img: img1,
          url: '/students-courses'
        }
      ];



    return (
      <div className='student-section main-container'>
        <Container className='student-section-grid'>
            {studentServices.map((student) => (
                <div className='student-section-card bounceInUp'>
                  <div className='img-cover'> 
                    <img src={student.img}/>
                  </div>
                  <div>
                    <h1>{student.title}</h1>
                    <MainButton title={'see more'} url={student.url}  addStyle='student-card-main-button'/>
                  </div>
                </div>
            ))}
          </Container>
      </div>
    )
}

export default StudentServices