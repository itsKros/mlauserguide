import React from 'react'
import TipBox from '../../../TipBox/TipBox';

function DashboardOverview() {
  return (
    <>
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#7b1fa2]">Dashboard Overview</h2>
            <p className="text-gray-700">
                Your Mini Lessons Dashboard is the central hub for creating, managing, and organizing your courses, books, and audiobooks. This guide will help you quickly understand and utilize all the key features available:
            </p>

            <div className="flex justify-start py-6">
                <img src="/imgs/getting-started/dashboard/dashboard.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 
        
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <p className="text-md font-bold text-[#7b1fa2]">        
                Main Dashboard
            </p>    
            <p className="text-gray-700">
                Your dashboard gives you immediate access to the essential functions needed to manage your content effectively:
            </p>

            <ul className="list-none space-y-4 pl-4 border-l-2 border-[#7b1fa2]">           
                <li className="pl-4">
                    <h3 className="text-md font-semibold text-[#7b1fa2]">Create Button</h3>
                    <p className="text-sm text-gray-700">
                        Click Create to start a new course, book, or audiobook. Choose your content type, input your topic, and generate professional-grade content instantly.
                    </p>
                </li>
                <li className="pl-4">
                    <h3 className="text-md font-semibold text-[#7b1fa2]">Course and Book Tabs</h3>
                    <p className="text-sm text-gray-700">
                        Toggle between your Courses and Books, clearly separating and organizing your types of content.
                    </p>
                </li> 
                <li className="pl-4">
                    <h3 className="text-md font-semibold text-[#7b1fa2]">Search & Filters</h3>
                    <p className="text-sm text-gray-700">
                        Quickly locate any content using the convenient search bar. Easily sort your items by date created, updated, or title.
                    </p>
                </li>
                <li className="pl-4">
                    <h3 className="text-md font-semibold text-[#7b1fa2]">Content Management Buttons</h3>
                    <p className="text-sm text-gray-700">
                        Each piece of content has clearly labeled buttons to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                        <li>
                            <span className="font-semibold">Edit:</span> Open and customize your content anytime.
                        </li>
                        <li>
                            <span className="font-semibold">Download:</span> Export content for offline use or external distribution.
                        </li>
                        <li>
                            <span className="font-semibold">Share:</span> Instantly generate shareable links to send to clients or students.
                        </li>
                        <li>
                            <span className="font-semibold">Delete:</span> Easily remove any outdated or unwanted content.
                        </li>
                    </ul>
                </li>          
            </ul>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <p className="text-md font-bold text-[#7b1fa2]"> Top Navigation Bar </p>  

            <ul className="list-none space-y-4 pl-4 border-l-2 border-[#7b1fa2]">           
                <li className="pl-4">                
                    <h3 className="text-md font-semibold text-[#7b1fa2]">AI Coach (Andy)</h3>
                    <div className="flex justify-start py-6">
                        <img src="/imgs/getting-started/dashboard/andy_ai.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
                    </div> 
                    <p className="text-sm text-gray-700">
                        Andy is your personal AI-powered assistant designed to accelerate your content creation process. Generate tailored headlines, blog posts, sales copy, product research, keyword research, and more in seconds. Use Andy when you need a first draft fast or a fresh angle.
                    </p>
                </li>
                <li className="pl-4">
                    <h3 className="text-md font-semibold text-[#7b1fa2]">Tutorials (Previously Knowledgebase)</h3>
                    <p className="text-sm text-gray-700">
                        Step-by-step instructions and detailed walkthroughs to help you effectively create, host, and monetize your digital products. If you're unsure about any Mini Lessons feature or section, the tutorials section provides clear guidance.
                    </p>
                </li>
                <li className="pl-4">
                    <h3 className="text-md font-semibold text-[#7b1fa2]">AI Coach (Andy)</h3>
                    <p className="text-sm text-gray-700">
                        Access a curated library of professional resources, including expert training guides, videos, and materials to help you grow your audience, improve your branding, and effectively monetize your digital products.
                    </p>
                </li>             
            </ul>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <p className="text-md font-bold text-[#7b1fa2]"> Profile Management </p> 
            <p className="text-sm text-gray-700"> Quickly update personal information, manage passwords, change billing details, and upgrade or downgrade your subscription plan, all within an intuitive, user-friendly interface.</p>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <p className="text-md font-bold text-[#7b1fa2]"> Customer Spotlight </p> 
            <p className="text-sm text-gray-700"> Feature your best-performing content in Mini Lessons Customer Spotlight. Showcase your courses or books publicly on Mini Lessons’ platform, boosting your visibility and attracting free, organic traffic to your offerings.</p>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <p className="text-md font-bold text-[#7b1fa2]"> Book a Call</p> 
            <p className="text-sm text-gray-700"> Schedule a personalized one-on-one strategy call with a Mini Lessons expert. Use the call to ask workflow questions or get feedback on your next launch</p>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <p className="text-md font-bold text-[#7b1fa2]"> Custom Solutions </p> 
            <p className="text-sm text-gray-700"> Explore Mini Lessons advanced, tailored services and enterprise-level solutions. Ideal for businesses looking for comprehensive custom solutions, including fully designed websites, content strategy assistance, and professional marketing support.</p>
                     
            <TipBox>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                    <li>
                        <span className="font-semibold">Regularly engage with Andy (AI Coach)</span> for quick, targeted content creation.
                    </li>
                    <li>
                        <span className="font-semibold">Use the "Create" button</span> often. We're always adding new, valuable content types and features.
                    </li>
                    <li>
                        <span className="font-semibold">Stay updated</span> by reading our email newsletter for timely information, updates, and exclusive best practices.

                    </li>
                    <li>
                        <span className="font-semibold">Reach out to our experts</span> by booking a strategy call if you ever have questions or need personalized assistance.
                    </li>
                </ul>
            </TipBox>  

            <p className="text-sm text-gray-700">
                The Mini Lessons Dashboard is built to simplify your workflow, helping you spend less time dealing with technical complexities and more time creating and growing your digital business.
            </p>   

            <div className="flex justify-left py-6">
                <img src="/imgs/getting-started/dashboard/create-new-content.png" alt="Description" className="w-full md:w-full h-auto p-6 shadow-sm rounded-md" />
            </div>  
        
        </div>
    </>
  )
}

export default DashboardOverview