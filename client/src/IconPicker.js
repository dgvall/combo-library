import React from 'react'
import './IconPicker.css'

import ClickableIcon from './ClickableIcon'


function IconPicker({extraInputs, buttonInputs, motionInputs, handleClick, handleSpace, gameSlug}) {

  const directionsRow1 = [
    {
      name: "7",
      image_url: "https://i.imgur.com/2rO9chH.png"
    },
    {
      name: "8",
      image_url: "https://i.imgur.com/8fY51s7.png"
    },
    {
      name: "9",
      image_url: "https://i.imgur.com/UqYEenq.png"
    },
  ]

  const directionsRow2 = [
    {
      name: "4",
      image_url: "https://i.imgur.com/HwKpXDr.png"
    },
    {
      name: "5",
      image_url: "https://i.imgur.com/OfO6HKV.png"
    },
    {
      name: "6",
      image_url: "https://i.imgur.com/gyfnDrv.png"
    },
  ]

  const directionsRow3 = [
    {
      name: "1",
      image_url: "https://i.imgur.com/Fby15hF.png"
    },
    {
      name: "2",
      image_url: "https://i.imgur.com/KezFbHr.png"
    },
    {
      name: "3",
      image_url: "https://i.imgur.com/06D3AyK.png"
    }
  ]

  // const directionInputs = [
  //   {
  //     name: "7",
  //     image_url: "https://i.imgur.com/2rO9chH.png"
  //   },
  //   {
  //     name: "8",
  //     image_url: "https://i.imgur.com/8fY51s7.png"
  //   },
  //   {
  //     name: "9",
  //     image_url: "https://i.imgur.com/UqYEenq.png"
  //   },
  //   {
  //     name: "4",
  //     image_url: "https://i.imgur.com/HwKpXDr.png"
  //   },
  //   {
  //     name: "5",
  //     image_url: "https://i.imgur.com/OfO6HKV.png"
  //   },
  //   {
  //     name: "6",
  //     image_url: "https://i.imgur.com/gyfnDrv.png"
  //   },
  //   {
  //     name: "1",
  //     image_url: "https://i.imgur.com/Fby15hF.png"
  //   },
  //   {
  //     name: "2",
  //     image_url: "https://i.imgur.com/KezFbHr.png"
  //   },
  //   {
  //     name: "3",
  //     image_url: "https://i.imgur.com/06D3AyK.png"
  //   }
  // ]

  const motionsRow1 = [
    {
      name: "214",
      image_url: "https://i.imgur.com/F0hNuQt.png"
    },
    {
      name: "236",
      image_url: "https://i.imgur.com/FGoSIYq.png"
    },
    {
      name: "421",
      image_url: "https://i.imgur.com/XUhyVUc.png"
    },
    {
      name: "623",
      image_url: "https://i.imgur.com/YbO0z8X.png"
    },
    {
      name: "624",
      image_url: "https://i.imgur.com/iocDwKJ.png"
    },
    {
      name: "426",
      image_url: "https://i.imgur.com/eoQSkqs.png"
    },
  ]

  const motionsRow2 = [
    {
      name: "684",
      image_url: "https://i.imgur.com/4Iem06x.png"
    },
    {
      name: "486",
      image_url: "https://i.imgur.com/oKZq3p4.png"
    },
    {
      name: "268",
      image_url: "https://i.imgur.com/CCdla7s.png"
    },
    {
      name: "248",
      image_url: "https://i.imgur.com/X6EeTeb.png"
    },
    {
      name: "842",
      image_url: "https://i.imgur.com/ogiRqdN.png"
    },
    {
      name: "862",
      image_url: "https://i.imgur.com/7d2vQ51.png"
    },
    {
      name: "Circle",
      image_url: "https://i.imgur.com/SoCvJ4j.png"
    },
  ]

  const universalInputs = [
    {
      name: "[",
      image_url: "https://i.imgur.com/rXmq6Ps.png"
    },
    {
      name: "]",
      image_url: "https://i.imgur.com/HgDolUR.png"
    },
    {
      name: "j.",
      image_url: "https://i.imgur.com/X4u3eOL.png"
    },
    {
      name: "jc.",
      image_url: "https://i.imgur.com/gnDR9rY.png"
    },
    {
      name: "dj.",
      image_url: "https://i.imgur.com/zTALYJv.png"
    },
    {
      name: "sj.",
      image_url: "https://i.imgur.com/o8VUuQr.png"
    },
    {
      name: "dl.",
      image_url: "https://i.imgur.com/3Yiy3t1.png"
    },
    {
      name: "md.",
      image_url: "https://i.imgur.com/e92KV5m.png"
    },
    {
      name: "tk.",
      image_url: "https://i.imgur.com/dDhnIA9.png"
    },
    {
      name: "land",
      image_url: "https://i.imgur.com/KTDY9lc.png"
    },
    {
      name: "OTG",
      image_url: "https://i.imgur.com/hE5DELK.png"
    },
  ]
  return (
    <div className = 'picker-container'>
      <div className = 'picker-rows'>
        <div className = 'picker-column'>
          <h2>{gameSlug}</h2>
          <div className = 'picker-row'>
            {
              extraInputs.map((u) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {u.id}
                    url = {u.image_url}
                    name = {u.name}
                    spaceIcon = {true}
                  />
                )
              })
            }
          </div>
          <h2>Buttons</h2>
          <div className = 'picker-row'>
            {
              buttonInputs.map((u, index) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {u.id}
                    url = {u.image_url}
                    name = {u.name}
                  />
                )
              })
            }
          </div>
          <h2>Universal</h2>
          <div className = 'picker-row'>
            {
              universalInputs.map((u, index) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {u.id}
                    url = {u.image_url}
                    name = {u.name}
                    spaceIcon = {true}
                  />
                )
              })
            }
          </div>
        </div>

        <div className = 'picker-column'>
          <h2>Directions</h2>
          <div className = 'picker-rows-container'>
            <div className = 'picker-row'>
              {
                directionsRow1.map((u, index) => {
                  return (
                    <ClickableIcon
                      handleClick = {handleClick}
                      key = {u.name}
                      url = {u.image_url}
                      name = {u.name}
                    />
                  )
                })
              }
            </div>
            <div className = 'picker-row'>
              {
                directionsRow2.map((u, index) => {
                  return (
                    <ClickableIcon
                      handleClick = {handleClick}
                      key = {u.name}
                      url = {u.image_url}
                      name = {u.name}
                    />
                  )
                })
              }
            </div>
            <div className = 'picker-row'>
              {
                directionsRow3.map((u, index) => {
                  return (
                    <ClickableIcon
                      handleClick = {handleClick}
                      key = {u.name}
                      url = {u.image_url}
                      name = {u.name}
                    />
                  )
                })
              }
            </div>
            
          </div>  
          <h2>Motions</h2>
          {/* <div className = 'picker-row'>
            {
              motionInputs.map((u, index) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {index}
                    url = {u.image_url}
                    name = {u.name}
                  />
                )
              })
            }
          </div> */}

          <div className = 'picker-rows-container'>
            <div className = 'picker-row'>
              {
                motionsRow1.map((u, index) => {
                  return (
                    <ClickableIcon
                      handleClick = {handleClick}
                      key = {u.name}
                      url = {u.image_url}
                      name = {u.name}
                    />
                  )
                })
              }
            </div>
            <div className = 'picker-row'>
              {
                motionsRow2.map((u, index) => {
                  return (
                    <ClickableIcon
                      handleClick = {handleClick}
                      key = {u.name}
                      url = {u.image_url}
                      name = {u.name}
                    />
                  )
                })
              }
            </div>
            
          </div>  
          
        </div>
      </div>
      <img
        src = "https://miketips.files.wordpress.com/2013/04/spacebar-pagedown.png"
        alt = "spacebar"
        onClick = {handleSpace}
      />
    </div>
  )
}

export default IconPicker