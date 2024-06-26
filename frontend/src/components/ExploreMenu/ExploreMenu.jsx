import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Các món nên thử ở Hà Nội</h1>
        <p className='explore-menu-text'>Những món ngon ở Hà Nội</p>
        <div className="explore-menu-list">
            {menu_list.map((item , index)=>{
                return(
                    <div key={index} className="explore-menu-list-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                        
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ExploreMenu
