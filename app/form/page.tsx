"use client"
import React, { useState } from 'react';

interface FormState {
  name: string;
  city: string;
  userId: string;
  youtubeLinks: string[];
  bio: string;
  education: string;
  experience: string;
}

const Form: React.FC = () => {
  const [state, setState] = useState<FormState>({
    name: '',
    city: '',
    userId: '',
    youtubeLinks: [''],
    bio: '',
    education: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;
    if (name === 'youtubeLinks' && typeof index === 'number') {
      const updatedLinks = [...state.youtubeLinks];
      updatedLinks[index] = value;
      setState({ ...state, youtubeLinks: updatedLinks });
    } else {
      setState({ ...state, [name]: value });
    }
  };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
  //   const { name, value } = e.target;
  //   console.log('Name:', name);
  //   console.log('Value:', value);
  //   setState(prevState => {
  //     if (name === 'youtubeLinks' && typeof index === 'number') {
  //       const updatedLinks = [...prevState.youtubeLinks];
  //       updatedLinks[index] = value;
  //       console.log('Updated Links:', updatedLinks);
  //       return { ...prevState, youtubeLinks: updatedLinks };
  //     } else {
  //       console.log('Other Field:', name);
  //       return { ...prevState, [name]: value };
  //     }
  //   });
  // };
  


  const handleAddLink = () => {
    setState({ ...state, youtubeLinks: [...state.youtubeLinks, ''] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Be a Speaker</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* City Input */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-lg font-medium text-gray-600">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={state.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* UserId Input */}
          <div className="mb-4">
            <label htmlFor="userId" className="block text-lg font-medium text-gray-600">User ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={state.userId}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* YouTube Links */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-600">YouTube Links</label>
            {state.youtubeLinks.map((link, index) => (
              <input
                key={index}
                type="text"
                value={link}
                onChange={(e) => handleChange(e, index)}
                className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              />
            ))}
            <button type="button" onClick={handleAddLink} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Link</button>
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label htmlFor="bio" className="block text-lg font-medium text-gray-600">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={state.bio}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Education */}
          <div className="mb-4">
            <label htmlFor="education" className="block text-lg font-medium text-gray-600">Education</label>
            <input
              type="text"
              id="education"
              name="education"
              value={state.education}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label htmlFor="experience" className="block text-lg font-medium text-gray-600">Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={state.experience}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              required
            />
          </div>

          <button type="submit" className="w-1/3 mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
