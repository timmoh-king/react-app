/**
 * @Author: Your name
 * @Date:   2022-06-18 18:23:47
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-20 09:36:30
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShareSquare } from '@fortawesome/free-solid-svg-icons'

const Card = ( props ) => {
  return (
    <div>
        <div className=" max-w-md rounded overflow-hidden shadow-lg p-6 mt-6">
        <img src={props.link} className="w-full img-fluid img" alt="full stack"   />
        <div className="px-6 py-4">
          <div className="font-bold text-bima-title text-xl text-start">
            <p>{props.name}</p>
          </div>
          <ul className="font-medium text-start mt-3">
            <li>
              <strong>Views: </strong>
              4000
            </li>
            <li>
              <strong>Downloads: </strong>
              300
            </li>
            <li>
              <strong>Views: </strong>
              800
            </li>
          </ul>
        </div>
        <div className="px-6 py-1 text-start space-x-3">
          <FontAwesomeIcon icon={faHeart} className="px-0" />
          <FontAwesomeIcon icon={faComment} className="px-0" />
          <FontAwesomeIcon icon={faShareSquare} className="px-0" />
        </div>
      </div>
    </div>
  )
}

export default Card