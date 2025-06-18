import React from 'react'
import TipBox from '../../TipBox/TipBox'


function OneClickCourseCreator() {
  return (
    <>
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#7b1fa2]">Using the One-Click Course Creator</h2>
          <p className="text-gray-700">The <span className="font-semibold">One-Click Course Creator</span> is your shortcut to creating courses instantly. This tool uses popular topics and streamlined steps, providing ready to use content immediately.</p>
          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/one-click/occ-1.jpg" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 
          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/one-click/occ-2.png" alt="Description" className="w-full md:w-4/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 

          <p className="text-xl font-bold text-[#7b1fa2]">How it Works</p>             
          
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Select a Popular Niche</span>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  Choose from top-performing niches like fitness, dating, technology, finance, healthcare, and more.
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-4">
                    <img src="https://placehold.co/300?text=Insert+Screenshot&font=inter" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
                    <img src="https://placehold.co/300?text=Insert+Screenshot&font=inter" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
                    <img src="https://placehold.co/300?text=Insert+Screenshot&font=inter" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
                  </div>
                </li>                
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Get a Recommended Title</span>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  Automatically receive a suggested title based on your selected niche.
                </li>
                <li>
                  You can use the suggested title as-is or easily customize it with your own idea.
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Pick Your Preferences</span>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  Quickly select content length (short, medium, or long).
                </li>
                <li>
                  Choose a content style (e.g., conversational, academic, informative).
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Generate Your Course</span>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  Click the <span className="font-semibold">"Generate"</span> button, and your content is created within seconds!
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 my-4">
                    <img src="/imgs/course-creation/one-click/occ-3.png" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
                  </div>
                </li>                
              </ul>  
            </li>            
          </ul>

          <TipBox label="Quick Tips">
              <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800" label="Quick Tips for Maximizing Andy’s Efficiency">
                  <li>
                    Use this tool when you're short on time or need inspiration
                  </li>
                  <li>
                    Remember, you can always edit or expand your course later using the Course Editor.
                  </li>
              </ul>
          </TipBox>
          <p className="text-gray-700">That's it! In just moments, your course is ready to share, monetize, and enhance your coaching, training, or educational business.</p>
      </div>
    </>
  )
}

export default OneClickCourseCreator