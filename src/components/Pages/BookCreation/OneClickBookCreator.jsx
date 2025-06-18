import React from 'react'
import TipBox from '../../TipBox/TipBox'

function OneClickBookCreator() {
  return (
    <>
          <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#7b1fa2]">Using the One-Click Book Creator</h2>
              <p className="text-gray-700">The <span className="font-semibold">One-Click Book Creator</span>  is your shortcut to creating engaging books without extensive planning or content research. If you're short on time or need inspiration, this tool quickly produces ready-to-use book content based on popular niches and straightforward steps.</p>
              <div className="flex justify-start py-6">
                <img src="/imgs/book-creation/one-click/obc-1.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
              </div> 
              <div className="flex justify-start py-6">
                <img src="/imgs/book-creation/one-click/obc-2.png" alt="Description" className="w-full md:w-4/5 h-auto p-6 shadow-sm rounded-md" />
              </div> 
    
              <p className="text-xl font-bold text-[#7b1fa2]">How it Works</p>             
              
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  <span className="font-semibold">Select a Popular Niche</span>
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                      Choose from popular book categories such as <span className="font-semibold">Fiction, Non-Fiction, Educational, Biography, Self-Help</span>, and more.
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
                    Automatically receive a suggested title tailored to your selected genre.

                    </li>
                    <li>
                    Use the recommended title as provided, or easily customize it to match your preference.
                    </li>
                  </ul>  
                </li>
    
                <li>
                  <span className="font-semibold">Pick Your Preferences</span>
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                    Quickly select your desired content length (<span className="font-semibold">short, medium</span>, or <span className="font-semibold">long</span>).
                    </li>
                    <li>
                    Choose a writing style (<span className="font-semibold">conversational, informative, narrative, persuasive</span>, etc.).

                    </li>
                  </ul>  
                </li>
    
                <li>
                  <span className="font-semibold">Generate Your Book</span>
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                      Click the <span className="font-semibold">"Generate"</span> button, and your book content is created within seconds!
                      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 my-4">
                        <img src="/imgs/book-creation/one-click/obc-3.png" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
                      </div>
                    </li>                
                  </ul>  
                </li>            
              </ul>
    
              <TipBox label="Quick Tips">
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800" label="Quick Tips for Maximizing Andy’s Efficiency">
                      <li>
                      Use this tool when you're pressed for time or looking for immediate inspiration.

                      </li>
                      <li>
                        Remember, you can always refine or expand your book later using the <span className="font-semibold">Book Editor.</span>
                      </li>
                  </ul>
              </TipBox>
              <p className="text-gray-700">That's it! In just a few clicks, your book is ready to share, publish, and showcase your expertise to your audience.</p>
          </div>
        </>
  )
}

export default OneClickBookCreator