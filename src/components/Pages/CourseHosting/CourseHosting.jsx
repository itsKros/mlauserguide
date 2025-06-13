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



















            {/* ------------------------------------------------------------------ */}
            
            <h2 className="text-2xl font-bold text-[#7b1fa2]">Creating Email Campaigns</h2>
            <p>Quickly generate engaging email sequences to promote your courses or books:</p>
            <div className="flex justify-start py-6">
                <img src="/imgs/email-marketing/em-1.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 

            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li>
                    <span className="font-semibold">Navigate to Your Course or Book Dashboard:</span> Click <span className="font-semibold">"Email Campaign"</span> to Start.
                </li>
                
                <li>
                    <span className="font-semibold">Generate Campaign:</span> Mini Lessons automatically creates a multi-email sequence, customized for your specific content.
                </li>
                <li>
                    <span className="font-semibold">Review & Select Emails:</span> 
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Your campaign includes up to 8 professionally-crafted emails to choose from.</li>
                        <li>
                            Each Email Has:
                            <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>
                                <span className="font-semibold">Goal:</span> Clearly states the email's purpose (e.g., introduce, engage, convert).
                            </li>
                            <li>
                                <span className="font-semibold">Subject Line:</span> Attention-grabbing and optimized for high open rates.
                            </li>
                            <li>
                                <span className="font-semibold">Body Content:</span> Compelling, personalized, and designed to encourage clicks and conversions.
                            </li>
                            </ul>
                        </li>
                    </ul>
                </li>                    
            </ul>

            <div className="flex justify-start py-6">
                <img src="/imgs/email-marketing/em-2.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 


            <h2 className="text-2xl font-bold text-[#7b1fa2]">Exporting Emails</h2>
            <p>Easily transfer emails to your favorite email marketing software or email client:</p>
            

            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li>
                    Click the <span className="font-semibold">copy button</span> next to the subject or body of any email to quickly copy and paste your content into any external program (MailChimp, ActiveCampaign, Gmail, etc.).
                </li>
                <li>
                    If you wish to make quick changes or regenerate content, simply adjust your preferences and Mini Lessons will immediately provide new, refreshed emails.
                </li>                    
            </ul>

            <div className="flex justify-start py-6">
                <img src="/imgs/email-marketing/em-3.png" alt="Description" className="w-2/5 md:w-1/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 


            <h2 className="text-2xl font-bold text-[#7b1fa2]">Best Practices for Email Marketing</h2>
            <p>Easily transfer emails to your favorite email marketing software or email client:</p>
            

            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li>
                    <span className="font-semibold">Consistency:</span> Send emails regularly to maintain audience engagement and build trust.
                </li>
                <li>
                    <span className="font-semibold">Clear CTA:</span> Always include a clear and compelling call-to-action, encouraging readers to enroll, learn more, or take the next step.
                </li>
                <li>
                    <span className="font-semibold">Personalization:</span> Customize emails using recipients' names or relevant details whenever possible for improved engagement.
                </li>
                <li>
                    <span className="font-semibold">Mobile Optimization:</span> Ensure your emails look great on all devices. Mini Lessons generated emails are formatted to be responsive and mobile-friendly by default.
                </li>
                <li>
                    <span className="font-semibold">Preview & Proofread:</span> Always preview your emails and read through carefully before sending.
                </li>
            </ul>


            <TipBox label="Quick Tips">
                <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                    <li>Start small: Begin with a shorter email series (3-4 emails) to test your audience's response, then gradually expand your campaign length as needed.</li>
                    <li>Set clear goal metrics for each email campaign so you can easily track performance, identify areas to improve, and refine your approach for future success.</li>
                </ul>
            </TipBox>   

        </div>
    </>
  )
}

export default CourseHosting