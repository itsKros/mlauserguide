import React from 'react'
import { BookOpen, Settings, Rocket } from 'lucide-react';

function Introduction() {

  const features = [
    {
      icon: BookOpen,
      title: 'Glimpse',
      description: 'Step-by-step guides to get you up and running quickly.',
    },
    {
      icon: Settings,
      title: 'Prerequisite',
      description: 'Totam, explicabo libero recusandae laudantium voluptatem',
    }
    
  ];

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#7b1fa2]">Introduction</h2>
        <p className="text-gray-700">Welcome to the User Guide. Explore the sections below to get started.</p>
        <p className="text-gray-700">        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi aperiam ipsa officia assumenda perspiciatis laboriosam quisquam. Alias deleniti maxime a ipsum, maiores beatae aperiam natus repellat quod ad fugiat debitis soluta nesciunt, eum similique labore mollitia consequuntur quidem, non doloribus recusandae! Mollitia autem molestiae et nostrum, odio sapiente deserunt quaerat totam laboriosam, facere iusto corrupti molestias illum in reiciendis.
        </p>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="text-md font-bold text-[#7b1fa2]">        
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className="text-[#7b1fa2] w-6 h-6 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold text-[#7b1fa2]">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default Introduction