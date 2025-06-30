import type React from "react"
import Image from "next/image"

const Steps: React.FC = () => {
  return (
    <div className="mx-auto px-4 pt-16 pb-6">
      {/* Step 1: Select A Workshop */}
      <div className="relative mb-16">
        <div className="relative bg-white rounded-xl p-4 pt-8 shadow-sm">
          <div className="absolute -top-5 left-6">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-base font-bold shadow-sm ring-4 ring-white">
              1
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-2"> Select a Workshop</h2>
            <p className="text-gray-600 text-sm">Choose an upcoming workshop you wish to attend</p>
          </div>
          <div className="absolute right-6 -top-8 w-32 h-16 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center h-full">
              <Image
                src="/placeholder.svg"
                alt="Workshops Preview"
                width={128}
                height={64}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Choose a Time */}
      <div className="relative mb-16">
        <div className="relative bg-white rounded-xl p-4 pt-8 shadow-sm">
          <div className="absolute -top-5 left-6">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-base font-bold shadow-sm ring-4 ring-white">
              2
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-2"> Choose a Time</h2>
            <p className="text-gray-600 text-sm">Select your preferred time slot for the workshop</p>
          </div>
          <div className="absolute right-6 -top-8 w-32 h-16 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center h-full">
              <Image
                src="/placeholder.svg"
                alt="Time Preview"
                width={128}
                height={64}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Provide Student Details */}
      <div className="relative">
        <div className="relative bg-white rounded-xl p-4 pt-8 shadow-sm">
          <div className="absolute -top-5 left-6">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-base font-bold shadow-sm ring-4 ring-white">
              3
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-base font-bold mb-2">Provide Student Details</h2>
            <p className="text-gray-600 text-sm">Fill in the required details of the student(s) attending.</p>
          </div>
          <div className="absolute right-6 -top-8 w-32 h-16 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center h-full">
              <Image
                src="/placeholder.svg"
                alt="Details Preview"
                width={128}
                height={64}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps

