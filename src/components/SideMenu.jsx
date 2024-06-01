import React, { useState } from 'react'

import OverviewIc from '../assets/icons/pie-chart-outline.svg'
import TicketIc from '../assets/icons/ticket-outline.svg'
import IdeaIc from '../assets/icons/bulb-outline.svg'
import ContactIc from '../assets/icons/people-outline.svg'
import AgenrIc from '../assets/icons/person-outline.svg'
import ArticleIc from '../assets/icons/newspaper-outline.svg'
import SettingIc from '../assets/icons/settings-outline.svg'
import SubscribtionIc from '../assets/icons/ribbon-outline.svg'
import styled from 'styled-components'

const primaryMenuItem = [
    {
        id: 1,
        icon: OverviewIc,
        label: 'Overview',
        onClick: ()=>{}
    },
    {
        id: 2,
        icon: TicketIc,
        label: 'Tickets',
        onClick: ()=>{}
    },
    {
        id: 3,
        icon: IdeaIc,
        label: 'Ideas',
        onClick: ()=>{}
    },
    {
        id: 4,
        icon: ContactIc,
        label: 'Contacts',
        onClick: ()=>{}
    },
    {
        id: 5,
        icon: AgenrIc,
        label: 'Agents',
        onClick: ()=>{}
    },
    {
        id: 6,
        icon: ArticleIc,
        label: 'Articles',
        onClick: ()=>{}
    },
];

const generalMenuItem = [
    {
        id: 1,
        icon: SettingIc,
        label: 'Settings',
        onClick: ()=>{}
    },
    {
        id: 2,
        icon: SubscribtionIc,
        label: 'Subcribtion',
        onClick: ()=>{}
    },
];

const SideMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <Container>
      <div className= {`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <div className= {`side-menu ${isOpen ? 'open' : ''}`}>
        <div className='primary-menu-wrapper'>
            {primaryMenuItem.map(item=>(

                <div className='primary-item-wrp' key={item.id}>
                    <div className='primary-item' onClick={item.onClick}>
                        <img src={item.icon} width={24} height={24} />
                        <p>{item.label}</p>
                    </div>
                </div>

            ))}
        </div>
        <div className='general-menu-wrapper'>
            {generalMenuItem.map(item=>(

                <div className='general-item-wrp' key={item.id}>
                    <div className='general-item' onClick={item.onClick}>
                        <img src={item.icon} width={24} height={24}/>
                        <p>{item.label}</p>
                    </div>
                </div>

            ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
    background-color: #363740;
    width: 100%;
    .prymary-menu-wrapper{
        width: 100%;
        .primary-item-wrp{
            .primary-item{
                display: flex;
                flex-direction: row;
                img{}
                p{
                    display: flex;
                }
            }
        }
    }
    .general-menu-wrapper{}
`

export default SideMenu