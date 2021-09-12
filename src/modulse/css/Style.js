import React from 'react'
import Videocard from '../../componet/Videocard'
const data = [
    {
        id: 1,
        video: 'https://www.youtube.com/embed/1PnVor36_40',
        sublink: [
            {
                id: 1,
                link: 'https://www.w3schools.com/css/css_howto.asp',
                title: '3 types of css',
            },
            {
                id: 2,
                link: 'https://medium.com/frontendshortcut/margin-vs-padding-c1fc8ea8bfaf',
                title: 'margin vs padding',
            },
            {
                id: 3,
                link: 'https://stackoverflow.com/a/9183818/12243456',
                title: 'margin vs padding in depth ',
            },
            {
                id: 4,
                link: 'https://www.w3schools.com/css/css_dimension.asp',
                title: 'height & width'
            },
            {
                id: 5,
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color',
                title: <a className='text-red-600'>co<a className='text-green-600 lowercase'>l</a><a className='lowercase text-blue-600'>or</a></a>
            }
        ],
    },
    {
        id: 2,
        video: 'https://www.youtube.com/embed/K74l26pE4YA',
        sublink: [
            {
                id: 1,
                link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                title: 'A Complete Guide to Flexbox',
            },
            {
                id: 2,
                link: 'https://medium.com/@emmabostian/css3-flexbox-the-cool-kid-on-the-block-cca8141cbee9',
                title: 'Guide to Flexbox (optional)',
            },
            {
                id: 3,
                link: 'https://blog.logrocket.com/a-guide-to-flexbox-properties-in-react-native/',
                title: 'Flex react native guide',
            },
            {
                id: 4,
                link: 'https://medium.com/@nadia.mechlia/why-flexbox-22932203bca3',
                title: 'why flex (optional)'
            },
            {
                id: 5,
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color',
                title: 'basics of grid for ReactJS only'
            }
        ],
    },

]
export default function Style() {
    return (
        <div className="">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-red-400">Style-CSS</h1>
            {/* <div class="container px-5 mx-auto">
                <h2 className='animate-bounce text-purple-600'>CSS( Cascading Style Sheets)</h2>

            </div> */}
            <div className='flex flex-col items-start mx-5'>
                <text className='my-5 text-gray-900 text-lg title-font font-bold font-large mb-3'>CSS Syntax</text>
                <ul className='text-left text-lg mb-5'>
                <li><a className="text-purple-700">h1</a> is a selector it points to the HTML element you want to style <a className="text-purple-700">{'<h1>'}</a></li>
                <li><a className='text-red-400'>color</a> is a property, and <a className='text-gray-500'>blue</a> is the value of that property</li>
                <li><a className='text-red-400'>font-size</a> is a property, and <a className='text-gray-500'>12px</a> is the value of that property</li>
                </ul>
                <img alt='syntaxdig' className='border h-28 rounded-md py-2' src='https://www.w3schools.com/css/img_selector.gif' />
                <text className='text-xs my-2 '>Image source is <a rel='notreferrer' className=" bg-indigo-100 text-indigo-500 mb-5" href='https://www.w3schools.com/css/css_syntax.asp'>w3schools</a></text>
                <text  className='my-5 font-bold text-gray-900 text-lg title-font font-large mb-3'>CSS Class</text>
                <div className='text-left'>
                    <div className='text-xl mb-6  overflow-hidden bg-white-300'>
                    <a className='text-purple-700'> .intro </a> {'{'}
                    <a className='text-red-400'> background-color</a>{':'}<a className='text-yellow-400'> yellow </a>;
                    {'}'}
                    </div>
                <ul className='text-left text-lg mb-5'>
                <li><a className="text-purple-700">intro</a> is a class it apply to the HTML element you want to style <a className="text-purple-700">{'<p class="intro">'}</a></li>
                <li><a className='text-red-400'>background-color</a> is a property, and <a className='text-gray-500'>yellow</a> is the value of that property</li>
                </ul>
                </div>
            </div>
            <div className='text-left text-lg mx-5 font-medium text-gray-700 rounded p-2 bg-red-200'>
            <a rel='notreferrer' className=" bg-indigo-100 rounded px-2 text-indigo-500 mb-5" href='https://www.w3schools.com/css/css_howto.asp'>Click here w3schools</a> if you want to understand in depth CSS and all the property's. If you want to clear the basics and start with some project then follow this guide.
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
