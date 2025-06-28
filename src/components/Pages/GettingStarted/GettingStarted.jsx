import React from 'react'
import { Link } from "react-router-dom";
import { BookOpen, Settings, Rocket } from 'lucide-react';

function GettingStarted() {
  const features = [
    {      
      title: 'Introduction',
      url: '/getting-started/introduction-to-mini-lessons-academy'      
    },
    {     
      title: 'Onboarding',
      url: '/getting-started/onboarding'
      
    },
    {      
      title: 'Dashboard Overview',
      url: '/getting-started/dashboard-overview'
    }

    
    
  ];
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#7b1fa2]">Getting Started</h2>
        <p className="text-gray-700">Welcome to the User Guide. Explore the sections below to get started.</p>
        <p className="text-gray-700">        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi aperiam ipsa officia assumenda perspiciatis laboriosam quisquam. Alias deleniti maxime a ipsum, maiores beatae aperiam natus repellat quod ad fugiat debitis soluta nesciunt, eum similique labore mollitia consequuntur quidem, non doloribus recusandae! Mollitia autem molestiae et nostrum, odio sapiente deserunt quaerat totam laboriosam, facere iusto corrupti molestias illum in reiciendis.
        </p>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="text-md font-bold text-[#7b1fa2]">        
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
        </section>


        <ul className="list-none space-y-4 pl-4 border-l-2 border-[#7b1fa2]">
            {features.map((item, index) => (
                <li key={index} className="pl-4">
                  <h3 className="text-md font-semibold text-[#7b1fa2]">
                    <Link to={item.url}>{item.title}</Link>
                  </h3>               
                </li>
            ))}
        </ul>

        
      </div>
    </>
  )
}

export default GettingStarted