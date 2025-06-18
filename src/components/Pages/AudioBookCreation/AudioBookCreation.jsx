import React from 'react'
import TipBox from '../../TipBox/TipBox'


function AudioBookCreation() {
  return (
    <>
              <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#7b1fa2]">Audiobook Creation</h2>
                  <p className="text-gray-700">Convert any course or book into an MP3 file in a few clicks. In just moments, you can enhance your content, boost accessibility, and reach a wider audience.
                  </p>
        
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        
                  <p className="text-xl font-bold text-[#7b1fa2]">Generating Audiobooks</p>             
                  <p className="text-gray-700">Creating an audiobook from your existing content is simple:
                  </p>
        
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                      <span className="font-semibold">Step 1: Select Content </span><br/>
                      
                      Navigate to your dashboard and choose the book or course you want to convert into an audiobook.
    
                    </li>
                    <li>
                      <span className="font-semibold">Step 2: Click on Create Audio in the editor</span>
                    </li>
                    <li>
                      <span className="font-semibold">Step 3: Generate Audio </span><br/>
                      Click Generate Audio for individual chapters or select Generate All to produce audio for the entire book or course instantly.
                      <br/>
                      A progress bar indicates the generation status clearly.

                      <div className="flex justify-start py-6">
                    <img src="/imgs/audiobook-creation/abc-1.jpg" alt="Description" className="w-full md:w-4/5 h-auto p-6 shadow-sm rounded-md" />
                  </div> 
                    </li>
                  </ul>       
                  
        
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        
                  <p className="text-xl font-bold text-[#7b1fa2]">Selecting & Customizing Voices</p>             
                  <p className="text-gray-700">Personalize the narration style to best suit your content:</p>
        
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                      <span className="font-semibold">Step 1: Choose a Voice</span>
                      <p className="mt-1 ml-1">From the dropdown menu, pick your preferred voice style. Options include:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700 font-semibold">
                        <li>Alloy (Balanced)</li>
                        <li>Echo (Soft)</li>
                        <li>Fable (Expressive)</li>
                        <li>Onyx (Deep)</li>
                        <li>Nova (Clear)</li>
                        <li>Shimmer (Bright)</li>
                      </ul>
                    </li>
                  </ul>    

                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                      <span className="font-semibold">Step 2: Preview Voice</span>
                      <p className="mt-1 ml-1">Use the <span className="font-semibold">Preview Voice</span> button to listen and confirm your choice before generating.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
                        <img src="/imgs/audiobook-creation/abc-2.png" alt="Description" className="w-full h-auto p-6 shadow-sm rounded-md" />
                        <img src="/imgs/audiobook-creation/abc-3.png" alt="Description" className="w-full h-auto p-6 shadow-sm rounded-md" />
                      </div>
                    </li>
                  </ul>          
        
                          
                  <p className="text-xl font-bold text-[#7b1fa2]">Combining Chapters into Audiobooks
                  </p>             
                  <p className="text-gray-700">Mini Lessons automatically compiles your chapters into a seamless audiobook:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                      Each chapter’s audio is clearly segmented.
                    </li>
                    <li>
                      Generate chapters individually or as a complete set.    
                    </li>
                    <li>
                      Once completed, play each chapter directly within the dashboard.    
                    </li>
                  </ul>
        
                  <div className="flex justify-start py-6">
                    <img src="/imgs/audiobook-creation/abc-4.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
                  </div> 
        
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        
                  <p className="text-xl font-bold text-[#7b1fa2]">Exporting Audiobooks</p>             
                  <p className="text-gray-700">Easily download your audiobooks for external use, sharing, or monetization:</p>
        
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                    Click the <span className="font-semibold">Download Complete Audio</span> button to export your entire audiobook.
                    </li>
                    <li>
                      Save it to your preferred device instantly.
                    </li>
                    
                  </ul>
        
                  
        
        
                  <TipBox>
                  Preview different voice styles to ensure the narration matches your content’s tone and style.
    <br />Mini Lessons user-friendly audiobook tools help you create accessible, engaging, and professional audio content with next to no effort.

    
                  </TipBox>
        
              </div>
            </>
  )
}

export default AudioBookCreation