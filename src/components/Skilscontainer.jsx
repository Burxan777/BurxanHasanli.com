import React from 'react'
import Skils from './Skils'
import skillinfo from './skillinfo.json'

// Aos





const Skilscontainer = () => {
  
 
  return (
    <>

      <div className="skilscontainer"id='Skils'>
        <div className="basliqskil ">
          <h1>Frontend  <span>Developer</span></h1>
        </div>
        <div  className="cardsskil  row">

          {
            skillinfo.map((birmelumat) => (
              <Skils  key={birmelumat.card_adi} skilsadi ={birmelumat.card_adi}   skilsmetni ={birmelumat.card_text} sksekli={birmelumat.card_sekli} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Skilscontainer