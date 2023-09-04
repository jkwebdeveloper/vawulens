import React from 'react'
import SectionHead from './SectionHead'
import Image from '../assets/images/values.jpg'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from '../Ui/Card'

const Value = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt="values_image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title="values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            adipisci reprehenderit repellendus, magnam earum rerum ab,
          </p>
          <div className="values_wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values_value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Value
