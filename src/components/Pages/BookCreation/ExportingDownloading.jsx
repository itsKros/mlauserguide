import React from 'react'
import TipBox from '../../TipBox/TipBox'


function ExportingDownloading() {
  return (
    <>
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#7b1fa2]">Exporting & Downloading Books</h2>
          <p className="text-gray-700">Mini Lessons makes it easy to export your books directly to your device, allowing you to conveniently access, edit, or distribute your content externally.
          </p>
              

          <p className="text-xl font-bold text-[#7b1fa2]">How to Export: </p>             
          
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Navigate to Your Book</span>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  Go to your dashboard and locate the book  you wish to download.
                </li>                
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Click the  <span className="font-semibold">"Download"</span> Button</span>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  Next to your chosen book, click the <span className="font-semibold">Download </span> button.
                </li>
                <li>
                  Choose your preferred format:
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                    <li>
                      <span className="font-semibold">PDF</span> (ideal for printing, sharing, or quick viewing)
                    </li>                
                    <li>
                      <span className="font-semibold">DOC</span> (ideal for external editing in Word or Google Docs)
                    </li> 
                    <div className="grid grid-cols-10 gap-4 mt-4">
                      <img src="/imgs/download.png" alt="Placeholder" className="w-3/5 h-auto rounded-md shadow-md" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 my-4">
                      <img src="/imgs/course-creation/exporting-downloading/ed-1.png" alt="Placeholder" className="w-3/5 h-auto rounded-md shadow-md" />
                    </div> 
                  </ul>  

                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Save to Your Device </span>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li>
                  Your book will immediately download to your computer or mobile device.
                </li>
                <li>
                  Open, edit, or share your content freely.
                </li>
              </ul>  
            </li>                       
          </ul>

          <TipBox label="Quick Tips">
          Regularly exporting and backing up your books ensures you always have a reliable offline copy ready for use at any time.

          </TipBox>
      </div>
    </>
  )
}

export default ExportingDownloading