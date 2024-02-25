import Link from 'next/link'
import React from 'react'
import variable from './mobile.module.scss'
import Image from 'next/image'

const index = ({projects}: any) => {
  return (
          <div className={variable.mobileBody}>
        {projects?.map((project: any, index: number) => (

          <Link href={project.link} key={index}>
            <div
              className={variable.mobileModal}
              style={{ backgroundColor: project.color }}
              key={`modal_${index}`}
            >
              <Image
                src={`/images/${project.src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
            <div className={variable.mobileInfo}>
              <h4>{project.title}</h4>
              <div className={variable.divider}/>
              <div className={variable.additionalInfo}>
                <p>Development</p>
                <p>2023</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default index