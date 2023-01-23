import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import CategoriesContext from '../context'


const TicketPage = ({ editMode }) => {

  
  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })

  const { categories, setCategories } = useContext(CategoriesContext)
  const dummyCategories = ["---Select a value---",...categories];

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value
    const name = e.target.name

    setFormData(prevState => ({
        ...prevState,
        [name]: value
      })
    );
  }

  const handleSubmit = () => {
    
  }

  console.log(formData)
  return (
    <div className='p-5 pb-0 w-full'>
      <h1>{editMode ? "Update your ticket" : "Delete a ticket"}</h1>
      <div className='w-full flex justify-center '>
        <form onSubmit={handleSubmit} 
              className='flex 
                        [&_section]:flex [&_section]:flex-col [&_section]:m-2 [&_section]:w-96
                        [&_section_label]:mt-[20px] 
                        [&_section_input]:border [&_section_input]:border-gray-300 [&_section_input]:p-[10px] [&_section_input]:text-[15px] [&_section_input]:rounded-lg [&_section_input]:m-[5px 0px]
                        [&_section_select]:p-[10px] [&_section_select]:text-[15px] [&_section_select]:border [&_section_select]:border-[rgb(210,210,210)] [&_section_select]:rounded-lg [&_section_select]:m-[5px 0px]'>
          <section>
            <label htmlFor='title'>Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />

            <label htmlFor='description'>Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />            

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {dummyCategories?.map((category, _index) => (
                <option value={category}>{category}</option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              value={formData.category}
            />

            <label>Priority</label>
            <div className="m-[20px 0] [&>*]:m-[2px]">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label htmlFor="priority-5">5</label>
            </div>

              {editMode && (
              <>
                <input
                  type="range"
                  className='!p-0'
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>

                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status == 'Done'} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status == 'In-Progress'}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status == 'Stuck'} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status == 'Ready to Start'}
                    value="not started"
                  >
                    Not Started
                  </option>
                </select>
              </>
            )}

            
          </section>

          <section>
            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="owner"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              onChange={handleChange}
            />
            <div className="m-[20px] w-[200px] h-[200px] rounded-2xl overflow-hidden">
              {formData.avatar && (
                <img className='w-full' src={formData.avatar} alt="image preview" />
              )}
            </div>
            <input className='' type="submit" />
          </section>    

          
        </form>
      </div>
      
    </div>
  )
}

export default TicketPage