import React from 'react';
import { FcHome, FcAssistant } from 'react-icons/fc'
import { SiYourtraveldottv } from 'react-icons/si'
import '../components/styles/First.css'
import { Button, Badge } from 'react-bootstrap'

const First =()=>{
    return <div className='wrap'>
        <h1> <FcHome/> Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores, reiciendis accusantium praesentium nesciunt nihil ex repellendus cumque maiores! Laborum blanditiis numquam quod maxime reprehenderit commodi suscipit repellat enim nemo.</p>

        <SiYourtraveldottv/>
        <FcAssistant />


        <Button variant="primary">Primary <Badge bg='success'>9</Badge></Button>

        <button type="button" className="btn btn-primary">
  Notifications <span className="badge text-bg-secondary">4</span>
</button>

    </div>
}

export default First