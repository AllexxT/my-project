import React from 'react';
import styled from 'styled-components'
import phone from './phone.png'


const MobileNums = styled.div `
    display: flex;
    padding-right: 30px;
`
const MobileLogo = styled.img `
    width: 50px;
    align-self: center;
`
const Numbers = styled.ul `
    align-self: center;
    li a {
        color: black;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
`

const MobileNumbers = () => {
    return (
    <MobileNums>
        <MobileLogo src={phone} alt='mobile' />
        <Numbers>
            <li><a href='tel:+380634566205'>+380634566205</a></li>
            <li><a href='tel:+380634566205'>+380634566205</a></li>
            <li><a href='tel:+380634566205'>+380634566205</a></li>
            <li><a href='tel:+380634566205'>+380634566205</a></li>
        </Numbers>
    </MobileNums>
    )
}

export default MobileNumbers;