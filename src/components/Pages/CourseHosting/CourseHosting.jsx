import React from 'react'
import TipBox from '../../TipBox/TipBox'

function CourseHosting() {
  return (
     <>
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#7b1fa2]">Course Hosting & Monetization</h2>

            <p className="text-gray-700">Mini Lessons makes hosting, sharing, and monetizing your courses seamless. Here's how you can effectively manage your content visibility, and embed courses on your website.</p>
            
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h2 className="text-2xl font-bold text-[#7b1fa2]">Hosting Your Courses</h2>
            <p className="text-gray-700">Mini Lessons offers simple but powerful tools to control how your course content is accessed:</p>

            <h2 className="text-xl font-bold text-[#7b1fa2]">Public vs. Private Visibility</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">            
                <li>
                <h3 className="font-semibold">Easily transfer your generated content into external programs:</h3>                     
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">
                        <li><span className="font-semibold">Public:</span> Anyone with the link can view your course instantly. Ideal for wide reach and marketing.</li>
                        <li><span className="font-semibold">Private:</span> Limit access strictly to authorized individuals, ensuring controlled and secure content distribution.</li>
                    </ul>
                </li>  
            </ul>

            <h2 className="text-xl font-bold text-[#7b1fa2]">Whitelisting (Coming Soon!)</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">            
                <li>Keep your courses private while giving access to specific individuals by email.</li>              
                <li>Perfect for exclusive content, premium subscribers, or specific groups.</li>  
            </ul>
            <div className="flex justify-start py-6">
                <img src="/imgs/course-hosting/ch-1.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div>
            <div className="flex justify-start py-6">
                <img src="/imgs/course-hosting/ch-2.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h2 className="text-2xl font-bold text-[#7b1fa2]">Embedding Courses on Your Website</h2>
            <p className="text-gray-700">Mini Lessons allows you to seamlessly embed your courses directly onto your own website, expanding your audience reach:</p>

            <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">            
                <li>Navigate to your course’s "Content Sharing & Embedding" section.</li>              
                <li>Copy the provided <span className="font-semibold">iframe embed code.</span></li>  
                <li>Simply paste this code into your website's HTML or CMS platform (like WordPress, Wix, Squarespace, etc.).</li>
                <li>Your audience can now interact with your course directly on your own website!</li>
            </ul>
            <div className="flex justify-start py-6">
                <img src="/imgs/course-hosting/ch-3.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            
            <h2 className="text-2xl font-bold text-[#7b1fa2]">Monetization & Payment Integration (Coming Soon – Currently Hidden)</h2>
            <p className="text-gray-700">Monetizing your courses through Mini Lessons is straightforward and flexible:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">
                <li>
                    <span className="font-semibold">Stripe Integration:</span> Connect your existing Stripe account to Mini Lessons.
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>Generate secure, embedded buy buttons directly linked to your Stripe account.</li>
                        <li>Accept direct payments and immediately track sales through Stripe’s robust analytics.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Mini Lessons Hosted Landing Pages:</span>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>We'll provide dedicated landing pages for each of your courses.</li>
                        <li>Easily accept payments directly through Mini Lessons-managed pages.</li>
                        <li>Mini Lessons handles payment processing and distributes funds securely to you.</li>
                    </ul>
                </li>
            </ul>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <TipBox label="Quick Tips for Effective Hosting & Monetization">
                <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">
                    <li>
                    Regularly review and adjust your course visibility settings based on your audience and promotional strategies.
                    </li>
                    <li>
                    Preview your embedded course on your site to ensure optimal display and usability.
                    </li>
                    <li>
                    Stay tuned for the monetization tools!
                    </li>
                </ul>
            </TipBox>

        </div>
    </>
  )
}

export default CourseHosting