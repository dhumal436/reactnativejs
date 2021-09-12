import React from 'react'
import Videocard from '../../componet/Videocard'
const data = [
    {
        id: 2,
        video: 'https://www.youtube.com/embed/DC471a9qrU4',
        sublink: [
            {
                id: 1,
                link: 'https://www.w3schools.com/js/js_es6.asp#mark_arrow',
                title: 'arrow function',
            },
            {
                id: 2,
                link: 'https://medium.com/@rafaelvidaurre/truly-understanding-async-await-491dd580500e',
                title: 'async - await',
            },
            {
                id: 3,
                link: 'https://medium.com/swlh/callbacks-in-javascript-6b0e39a713cd',
                title: 'callbacks',
            },
        ],
    },
    {
        id: 3,
        video: 'https://www.youtube.com/embed/gigtS_5KOqo',
        sublink: [
            {
                id: 1,
                link: 'https://medium.com/swlh/the-essentials-of-javascript-arrays-68f39339038e',
                title: 'functions of array',
            },
            {
                id: 2,
                link: 'https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421',
                title: 'Objects vs. Arrays',
            },
            {
                id: 3,
                link: 'https://www.youtube.com/watch?v=UgEaJBz3bjY&ab_channel=Fireship',
                title: 'Destructuring(video)',
            },
        ],
    },
    {
        id: 1,
        video: 'https://www.youtube.com/embed/rRgD1yVwIvE',
        sublink: [
            {
                id: 1,
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
                title: 'filter',
            },
            {
                id: 2,
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
                title: 'reduce',
            },
            {
                id: 3,
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
                title: 'map',
            },
            {
                id: 4,
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
                title: 'sort',
            },
        ],
    },

]
export default function Es6() {
    return (
        <div className="">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-red-400">Javascript-ES6</h1>
            <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-2">
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center  hover:shadow-xl border-gray-200 bg-red-400 border p-4 rounded-lg">
                        <div class="flex-grow">
                        <a href='https://www.w3schools.com/js/js_es6.asp#mark_let' target='_blank' class="text-white title-font font-medium">let Keyword</a>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center bg-green-400 hover:shadow-xl border-gray-200 border p-4 rounded-lg">
                        <div class="flex-grow">
                        <a href='https://www.w3schools.com/js/js_es6.asp#mark_const' target='_blank' class="text-white title-font font-medium">const keyword</a>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center bg-purple-400 hover:shadow-xl border-gray-200 border p-4 rounded-lg">
                        <div class="flex-grow">
                            <a href='https://www.w3schools.com/js/js_es6.asp#mark_set' target='_blank' class="text-white title-font font-medium">Sets</a>
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
