import React from 'react'
import TipBox from '../../TipBox/TipBox'

function Spotlight() {
  return (
     <>
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#7b1fa2]">Spotlight</h2>

            <p className="text-gray-700">Your success inspires us! At Mini Lessons, we love celebrating our users’ wins, sharing your stories, and helping you shine brighter. Share your work in the Spotlight section so other creators can see real-world examples.</p>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h2 className="text-2xl font-bold text-[#7b1fa2]">Submit for Spotlight</h2>

            <p className="text-gray-700">We want to feature you! Here’s how you can submit your course, book, or success story:</p>

            <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">
                <li>
                    <h3 className="font-semibold">Tell Us Your Story</h3> 
                    Share how Mini Lessons helped you create impactful courses or compelling books. Include what makes your content unique or particularly successful.
                </li>

                <li>
                    <h3 className="font-semibold">Provide Highlights</h3> 
                    Describe key results like increased followers, revenue boosts, engagement rates, or any measurable successes you've experienced.
                </li>

                <li>
                    <h3 className="font-semibold">Include Visuals</h3> 
                    Submit high-quality images, videos, or screenshots showcasing your work or testimonials from satisfied students.
                </li>

                <li>
                    <h3 className="font-semibold">Submit Easily</h3> 
                    Send your submissions directly through our simple Spotlight form or email our support team. We’ll take care of the rest!
                </li>                
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <img src="https://placehold.co/300?text=Insert+Screenshot&font=inter" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
                <img src="https://placehold.co/300?text=Insert+Screenshot&font=inter" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
                <img src="https://placehold.co/300?text=Insert+Screenshot&font=inter" alt="Placeholder" className="w-full h-auto rounded-md shadow-md" />
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h2 className="text-2xl font-bold text-[#7b1fa2]">Boosting Visibility</h2>

            <p className="text-gray-700">Being featured on Mini Lessons Spotlight can elevate your visibility and credibility:</p>

            <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">
                <li>
                    <span className="font-semibold">Increased Exposure:</span> Gain exposure on our website, newsletters, social media channels, and more.
                </li>
                <li>
                    <span className="font-semibold">Credibility Boost:</span> Showcase your success prominently, increasing your trustworthiness and authority in your niche.
                </li>
                <li>
                    <span className="font-semibold">Networking Opportunities:</span> Connect with potential collaborators, students, and peers through your increased visibility.
                </li>
                <li>
                    <span className="font-semibold">Community Recognition:</span> Receive appreciation and recognition from the Mini Lessons community, motivating further growth and creativity.
                </li>
            </ul>            

            <TipBox label="Quick Tips for a Great Spotlight Submission">
                <ul className="list-disc pl-5 space-y-2 mt-2 text-md text-gray-800">
                    <li>Clearly highlight your success and unique aspects of your content.</li>
                    <li>Include numbers or concrete results to illustrate your achievements.</li>
                    <li>Use high-quality visuals and testimonials to reinforce your story.</li>
                </ul>
            </TipBox>

        </div>
    </>
  )
}

export default Spotlight