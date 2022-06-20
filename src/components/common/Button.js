/**
 * @Author: Your name
 * @Date:   2022-06-19 17:54:50
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-19 18:01:29
 */
import React from 'react'

function Button(props) {
  return (
    <div>
        <button className="bg-bima-skyblue hover:bg-bima-green min-w-[145px] h-[30px] rounded-md text-bima-white mt-2 justify-items-end">
          {props.text}
        </button>
    </div>
  )
}

export default Button