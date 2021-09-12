import React from 'react'

export default function Videocard(props) {
  const { video, sublink } = props;

return(
<section class="text-gray-600 w-10/12 my-4 body-font">
<div class="container rounded-lg border border-indigo-200 hover:shadow-2xl px-5 py-10 item-center mx-auto flex flex-wrap">
  <div class="lg:w-3/5 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
  <div class="rounded-lg h-64 overflow-hidden">
        <iframe allowFullScreen={true} src={video} title="YouTube video player" class="object-cover object-center h-full w-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  </div>
  <div class="flex flex-col flex-wrap lg:py-4 -mb-10  lg:pl-12 lg:text-left text-center">
    <div class="flex flex-col mb-10 lg:items-start items-start">
      {sublink && sublink.map(value => (

    <a key={value.id} rel='notreferrer' target="_blank" class="mt-3 overflow-ellipsis text-lg text-indigo-500 inline-flex capitalize items-center" href={value.link}>
        {value.title}
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
    </a>
      ))}
    </div>
    
  </div>
</div>

</section>)

}
