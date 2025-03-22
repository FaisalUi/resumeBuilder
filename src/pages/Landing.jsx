import React from 'react'
import useToken from '../utils/useToken'
import useUser from '../utils/useUser';
import TemplateListing from '../Components/TemplateListing';
import {imageConst} from '../constraints';
import FormStep from '../Components/FormStep';

const Landing = () => {
  const user = useUser();
  const templates = [
    {
      id: 0,
      name: 'Side Skill Template',
      description: 'Resume template with left side bar',
      img: imageConst?.template1,
    },
    {
      id: 1,
      name: 'Template 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium ipsam reiciendis',
      img: imageConst?.template2,
    },
    // {
    //   id: 2,
    //   name: 'Template 3',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium ipsam reiciendis',
    //   img: imageConst?.templateImg,
    // },
  ] 
  return (
    <>
      {/* <div>{user?.id}</div>
      <div>{user?.name}</div>
      <div>{user?.email}</div> */} 
      <div className='container pt-5'>
        <div className="row gy-4">
          {templates?.map(temp => {
            return (
              <div className="col-md-4" key={temp?.id}>
                <TemplateListing data={temp} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Landing