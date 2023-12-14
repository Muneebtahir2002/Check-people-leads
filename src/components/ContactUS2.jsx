import React from 'react'
import APPBAR from '../small components/AppBar2'

export const ContactUS2 = () => {
  return (
    <div>
        <APPBAR />
        <div>
        <h2>
        Contact Endato Support
        </h2>
        <p>
        If you have questions about your Endato account or would like to contact someone in Customer Service, please contact us below.
        </p>
        <div style={{display:'flex'}}>
         <div>   
        <img src={IMG} />
        <p>
        Call Us at 1 (855) 536-3286
        </p>
        </div>
         <div>   
        <img src={IMG2} />
        <p>
        Email us at support@endato.com
        </p>
        </div>
        </div>
        <div className="card-contactus">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="submit-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
        </div>

    </div>
  )
}
