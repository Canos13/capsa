import '../css/history.css'
import { Timeline } from 'antd'
import Bar from '../components/Navbar'
import React, { useState } from 'react'
import ModalComp from '../components/ModalComp';
import CarouselImg from '../components/CarouselImg';
import { firstData, secondData, thirdData } from '../lib/data'
import { ClockCircleOutlined } from '@ant-design/icons';

const History = () => {
    const [showModal, setshowModal] = useState(false)
    const [Data, setData] = useState(null)
    const closeButton = () => setshowModal(false)
    
    const handleShowModal = dat => {
        setData(dat)
        setshowModal(true)
    }

    return (
      <div>
          <Bar />
          <div className='w-90 mt-5'>
              <Timeline mode="alternate">
                  <Timeline.Item role="button" onClick={() => handleShowModal(firstData)} >
                      2020 - Autopista Amozoc Perote 
                      <span style={{ color: 'blue' }}> [Ver imagen]</span>
                  </Timeline.Item>
                  <Timeline.Item color="green" role="button" onClick={() => handleShowModal(secondData)}> <span style={{ color: 'blue' }}>[Ver imagen] </span> Área Amozoc - 2021</Timeline.Item>
                  <Timeline.Item role="button" onClick={() => handleShowModal(thirdData)}
                    dot={
                      <ClockCircleOutlined
                        style={{
                          fontSize: '19px',
                        }}
                      />
                    }
                  >
                      2022 - Amozoc de Mota<span style={{ color: 'blue' }}> [Ver imagen]</span>
                  </Timeline.Item>
                  <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item
                    dot={
                      <ClockCircleOutlined
                        style={{
                          fontSize: '16px',
                        }}
                      />
                    }
                  >
                    Technical testing 2015-09-01
                  </Timeline.Item>
              </Timeline>
          </div>
          {
                showModal && <ModalComp
                    onClose={closeButton}
                    title="Historia"
                    body={ <CarouselImg Data={Data} /> }
                    size='lg'
                />
            }
      </div>
    )
}

export default History