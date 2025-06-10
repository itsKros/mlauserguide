import React from 'react'
import TipBox from '../../../TipBox/TipBox';

function Onboarding() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#7b1fa2]">Onboarding</h2>
        <p className="text-gray-700">
            When you first log into Mini Lessons, you’ll complete a brief onboarding sequence. Your answers personalize default settings such as content type and dashboard layout.
        </p>
        
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="text-md font-bold text-[#7b1fa2]">        
            Why We Ask These Questions:
        </p>        
        <ul className="list-none space-y-4 pl-4 border-l-2 border-[#7b1fa2]">           
            <li className="pl-4">
                <h3 className="text-md font-semibold text-[#7b1fa2]">Personalization</h3>
                <p className="text-sm text-gray-700">
                    So we can tailor your dashboard, content generation tools, and recommendations based on your specific role and goals.
                </p>
            </li>
            <li className="pl-4">
                <h3 className="text-md font-semibold text-[#7b1fa2]">Better Guidance</h3>
                <p className="text-sm text-gray-700">
                    Helps us connect you to the most useful resources and features.
                </p>
            </li>           
        </ul>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="text-md font-bold text-[#7b1fa2]">        
            What You'll Be Asked
        </p>        
        <ul className="list-none space-y-4 pl-4 border-l-2 border-[#7b1fa2]">           
            <li className="pl-4">                
                <p className="text-sm text-gray-700">
                    Your professional role (e.g., Coach, Educator, Freelancer, Small Business)
                </p>
            </li>
            <li className="pl-4">
                <p className="text-sm text-gray-700">
                    Size of your company (Just you, small, medium, or large teams)
                </p>
            </li>
            <li className="pl-4">
                <p className="text-sm text-gray-700">
                    Preferred type of content creation (e.g., Courses, Books, Audiobooks, etc.)
                </p>
            </li>             
        </ul>

        <p className="text-gray-700">        
            This entire process takes no time at all, after which you’ll land directly on your dashboard - ready to start creating!
        </p>

        <TipBox>
            If you ever need to update your information later, simply visit your account settings in your dashboard.
        </TipBox>     


        <div className="flex justify-center py-6">
            <img src="/imgs/getting-started/onboarding/onboarding.png" alt="Description" className="w-2/5 h-auto" />
        </div>  
        
      </div>
    </>
  )
}

export default Onboarding