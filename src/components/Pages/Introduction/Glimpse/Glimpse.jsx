import React from 'react'

function Glimpse() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#7b1fa2]">Glimpse</h2>
        <p className="text-gray-700">Welcome to the User Guide. Explore the sections below to get started.</p>
        <p className="text-gray-700">        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi aperiam ipsa officia assumenda perspiciatis laboriosam quisquam. Alias deleniti maxime a ipsum, maiores beatae aperiam natus repellat quod ad fugiat debitis soluta nesciunt, eum similique labore mollitia consequuntur quidem, non doloribus recusandae! Mollitia autem molestiae et nostrum, odio sapiente deserunt quaerat totam laboriosam, facere iusto corrupti molestias illum in reiciendis.
        </p>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="text-md font-bold text-[#7b1fa2]">        
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <h3 className="text-xl font-semibold text-[#7b1fa2] mt-4">System Requirements</h3>
      <table className="w-full table-auto border border-gray-200 mt-2 text-sm">
        <thead className="bg-[#f3e5f5] text-[#4a148c]">
          <tr>
            <th className="border px-4 py-2 text-left">Requirement</th>
            <th className="border px-4 py-2 text-left">Minimum Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Node.js</td>
            <td className="border px-4 py-2">14.x or higher</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-2">npm</td>
            <td className="border px-4 py-2">6.x or higher</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">OS</td>
            <td className="border px-4 py-2">Windows, macOS, or Linux</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-[#7b1fa2] mt-6">Installation Command</h3>
      <div className="bg-gray-900 text-white rounded-lg p-4 text-sm font-mono overflow-x-auto">
        <pre>
          <code>{`npm install -g my-application`}</code>
        </pre>
      </div>

      <p className="mt-4">
        Once installed, you can verify the installation using the following command:
      </p>

      <div className="bg-gray-900 text-white rounded-lg p-4 text-sm font-mono overflow-x-auto">
        <pre>
          <code>{`my-application --version`}</code>
        </pre>
      </div>
        

        
      </div>
    </>    
  )
}

export default Glimpse