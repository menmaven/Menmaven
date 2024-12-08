import React from 'react'

function Footer() {
  return (
    <div>
      <ul style={{display:'flex',gap:'10px',flexDirection:'column',listStyle:'none',marginLeft:'30px'}}>
        <li style={{fontSize:'32px',fontWeight:'700',lineHeight:'40px'}}>
            CONTACT US
        </li>
        <li style={{fontSize:'32px',fontWeight:'700',lineHeight:'40px'}}>
         DELIVERY POLICY
        </li>
        <li style={{fontSize:'32px',fontWeight:'700',lineHeight:'40px'}}>
        PRIVACY POLICY
        </li>
        <li style={{fontSize:'32px',fontWeight:'700',lineHeight:'40px'}}>
        CUSTOMER CARE
        </li>
        <li style={{fontSize:'32px',fontWeight:'700',lineHeight:'40px'}}>
        EXCHANGE AND RETURN
        </li>
      </ul>
    </div>
  )
}

export default Footer
