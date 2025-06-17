import React from 'react'
import TipBox from '../../TipBox/TipBox'

function CourseCreator() {
  return (
    <>
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#7b1fa2]">Using the Course Creator</h2>
          <p className="text-gray-700">The Course Creator in Mini Lessons lets you quickly and easily generate structured, accurate, and highly-customized course content in just minutes. Skip manual outlining and watch as Mini Lessons generates your draft. You can even create multiple draft courses in one working session.</p>
          <p className="text-gray-700">Here's exactly how it works:</p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p className="text-xl font-bold text-[#7b1fa2]">Step 1: Choose Your Content Type</p>             
          <p className="text-gray-700">First, select Course, then pick from these content options:</p>

          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Educational Course: </span>In-depth lessons, exercises, and assessments.
            </li>
            <li>
              <span className="font-semibold">Skills Training: </span>Interactive courses focusing on practical skill-building.
            </li>
            <li>
              <span className="font-semibold">Quick Guide: </span>Concise tutorials and handy reference materials.
            </li>
          </ul>

          <p className="text-gray-700 italic ">More content types coming soon!</p>

          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/course-creator/cc-1.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p className="text-xl font-bold text-[#7b1fa2]">Step 2: Customize Your Content</p>             
          <p className="text-gray-700">Easily tailor your course to your audience's needs:</p>

          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Target Audience: </span>Select from options like Children, Beginners, Professionals, or Educators.
            </li>
            <li>
              <span className="font-semibold">Content Style: </span>Choose your preferred style - Academic, Conversational, Humorous, and more.
            </li>
            <li>
              <span className="font-semibold">Length/Depth: </span>Set your course length, from brief summaries to comprehensive deep dives.
            </li>
            <li>
              <span className="font-semibold">Number of Chapters: </span>Clearly define your course structure upfront.
            </li>
          </ul>              

          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/course-creator/cc-2.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 

          <p className="text-xl font-bold text-[#7b1fa2]">Advanced Customization (Optional)</p>             
          <p className="text-gray-700">Fine-tune your content even further:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Content Structure: </span>Options include Q&A format, case studies, step-by-step guides, and more.
            </li>
            <li>
              <span className="font-semibold">Tone: </span>Customize the emotional tone: Formal, Informal, Inspirational, or Authoritative.
            </li>
            <li>
              <span className="font-semibold">Media Type: </span>Incorporate various media: Text-only, Illustrated, Audio Companion, or Video.
            </li>
          </ul>

          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/course-creator/cc-3.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p className="text-xl font-bold text-[#7b1fa2]">Step 3: Get Title Inspiration</p>             
          <p className="text-gray-700">Not sure what to call your course? No worries:</p>

          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              Enter your general topic or idea.
            </li>
            <li>
              Mini Lessons instantly provides several professionally-crafted title suggestions.
            </li>
            <li>
              Choose your favorite, or enter your own.
            </li>
          </ul>

          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/course-creator/cc-4.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 

          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/course-creator/cc-5.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p className="text-xl font-bold text-[#7b1fa2]">Step 4: Review & Refine</p>             
          <p className="text-gray-700">Mini Lessons instantly generates a detailed summary of your course based on your choices. <br/>
          You can review and refine your summary to perfectly match your vision, ensuring clarity, accuracy, and quality before publishing.
          </p>              

          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/course-creator/cc-6.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p className="text-xl font-bold text-[#7b1fa2]">Step 5: Generate, Save & Publish</p>             
          <p className="text-gray-700">In seconds, your full course content is generated and ready for you. When you’re happy with the draft, export it or return to the dashboard to manage it.
          <br />You'll have two straightforward options:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Edit & Enhance: </span>Add covers, images, videos, quizzes, and personalize further.
            </li>
            <li>
              <span className="font-semibold">Return to Dashboard: </span>Preview your content, create another course, or manage your existing library.
            </li>
          </ul>


          <div className="flex justify-start py-6">
            <img src="/imgs/course-creation/course-creator/cc-7.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div> 


          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />


          <TipBox>
            Don’t stress about perfection on your first go! Mini Lessons makes it simple to continuously enhance and refine your content whenever you want.<br />
            Congratulations! You’re now ready to create top-tier courses tailored specifically to your audience’s unique needs!
          </TipBox>

      </div>
    </>
  )
}

export default CourseCreator