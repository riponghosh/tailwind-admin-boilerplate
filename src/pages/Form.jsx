
import Layouts from "../components/layout/Layouts"

const Form = () => {
    return (
        <>
            <Layouts>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <h1>Form Layout</h1>
                        <div>
                            {"Konrix > layout > Form Layout"}
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-white p-5 rounded-md shadow-lg w-full space-y-4'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold'>Demo Form</h1>
                            </div>
                            <div className='space-y-4'>
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Name</label>
                                    <input type="text" placeholder="Enter your name" className="input-field" />
                                </div>

                                {/* Email */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Email</label>
                                    <input type="email" placeholder="Enter your email" className="input-field" />
                                </div>

                                {/* Address */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Address</label>
                                    <input type="text" placeholder="Enter your address" className="input-field" />
                                </div>

                                {/* Skills */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Skills</label>
                                    <div className="flex space-x-4">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox input-field-checkbox" />
                                            <span className="ml-2">Frontend</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox input-field-checkbox" />
                                            <span className="ml-2">Backend</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox input-field-checkbox" />
                                            <span className="ml-2">React</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Gender */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Gender</label>
                                    <div className="flex space-x-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="gender" className="form-radio input-field-radio" />
                                            <span className="ml-2">Male</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="gender" className="form-radio input-field-radio" />
                                            <span className="ml-2">Female</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="gender" className="form-radio input-field-radio" />
                                            <span className="ml-2">Other</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Bio</label>
                                    <textarea placeholder="Enter your bio" className="input-field"></textarea>
                                </div>

                                {/* File Upload */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Upload File</label>
                                    <input type="file" className="input-field" />
                                </div>

                                {/* Date Picker */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Select Date</label>
                                    <input type="date" className="input-field" />
                                </div>

                                {/* Password */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Password</label>
                                    <input type="password" placeholder="Enter your password" className="input-field" />
                                </div>

                                {/* Select Option */}
                                <div className='space-y-2'>
                                    <label className="block text-gray-700">Choose an Option</label>
                                    <select className="input-field">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>


                                {/* Buttons  */}
                                <div className="flex space-x-4">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#1E85FF]">Submit</button>
                                    <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1E85FF]">Clear</button>
                                    <button type="button" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-[#1E85FF]">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default Form