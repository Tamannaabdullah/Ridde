import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs'


export const SidebarData = [
    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Riddles',
        path: '/riddles',
        icon: <BsIcons.BsQuestionOctagonFill />,
        cName: 'nav-text'
    },
    {
        title:'Leaderboard',
        path: '/leaderboard',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    },
]