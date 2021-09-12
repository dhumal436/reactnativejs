import React, { useState } from 'react'
import Videocard from '../../componet/Videocard'
const data = [
    {
        id: 2,
        video: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
        sublink: [
            {
                id: 1,
                link: 'https://medium.com/@rajat_m/understand-life-cycle-methods-in-react-js-71a5464867cf',
                title: 'Life Cycle',
            },
            {
                id: 2,
                link: 'https://medium.com/swlh/react-lifecycle-hooks-71547ef4e7a8',
                title: 'Lifecycle & Hooks',
            },
            {
                id: 3,
                link: 'https://reactjs.org/docs/react-component.html',
                title: 'component (optional)',
            },
            {
                id: 4,
                link: 'https://www.freecodecamp.org/news/jsx-in-react-introduction/',
                title: 'JSX is Just HTML ?'
            }
        ],
    },
    {
        id: 3,
        video: 'https://www.youtube.com/embed/O6P86uwfdR0',
        sublink: [
            {
                id: 1,
                link: 'https://blog.webdevsimplified.com/2020-04/use-state/',
                title: 'in depth useState',
            },
        ],
    },
    {
        id: 1,
        video: 'https://www.youtube.com/embed/06Y6aJzTmXY',
        sublink: [
            {
                id: 1,
                link: 'https://medium.com/swlh/beginners-guide-to-using-usestate-useeffect-react-hooks-489dd4bc8663',
                title: 'how useEffect works',
            },
            {
                id: 2,
                link: 'https://www.youtube.com/watch?v=DTlmk6QeOHY&ab_channel=Codevolution',
                title: 'useEffect as componentWillUnmount',
            },
            {
                id: 3,
                link: 'https://stackoverflow.com/a/59035126/12243456',
                title: 'unsubscribe is important',
            },
        ],
    },
    {
        id: 4,
        video: 'https://www.youtube.com/embed/t2ypzz6gJm0',
        sublink: [
            {
                id: 1,
                link: 'https://blog.webdevsimplified.com/2020-05/use-ref/',
                title: 'how useRef works',
            },
            {
                id: 3,
                link: 'https://eveningkid.medium.com/the-basics-of-react-native-animations-fb00a8ccc178',
                title: 'react native animation',
            },
        ],
    },
]
export default function LifeSycle() {
    const [state, setstate] = useState('Click Me')
    const emoji = ["😀",
        "😁",
        "😂",
        "😃",
        "😄",
        "😅",
        "😆",
        "😇",
        "😈",
        "👿",
        "😉",
        "😊",
        "☺️",
        "😋",
        "😌",
        "😍",
        "😎",
        "😏",
        "😐",
        "😑",
        "😒",
        "😓",
        "😔",
        "😕",
        "😖",
        "😗",
        "😘",
        "😙",
        "😚",
        "😛",
        "😜",
        "😝",
        "😩",
        "😪",
        "😫",
        "😬",
        "😭",
        "😮",
        "😯",
        "😰",
        "😱",
        "😲",
        "😳",
        "😴",
        "😵",
        "😶",
        "😷",
        "😸",
        "😹",
        "😺",
        "😻",
        "😼",
        "😽",
        "😾",
        "😿",
        "🙀",]
const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <div className="pt-5">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-red-400">React</h1>
            <div class="container px-5 mx-auto">
                <div class="flex justify-center flex-wrap -m-2">
                    <div class="p-2 lg:w-1/3 md:w-1/2  w-full">
                        <div class="h-full flex items-center bg-red-500 border-gray-200 border p-4 rounded-lg">
                            <div class="flex-grow">
                                <button onClick={() =>  setstate(emoji[randomInteger(0,emoji.length-1)])} class="text-white title-font font-large">{state}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5  mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 justify-center text-center">
                        {
                            data && data.map(value =>
                                <Videocard key={value.id} video={value.video} sublink={value.sublink} />
                            )
                        }
                    </div>
                </div>
            </section>
        </div>


    )
}
