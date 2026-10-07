import './About.css'
import { useEffect, useState } from 'react'

const About = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => {
        setAbout(data)
      })
      .catch(error => {
        console.error('Error fetching About Us data:', error)
      })
  }, [])

  if (!about) {
    return <p>Loading...</p>
  }

return (
  <div className="About">
      <h1>About Us</h1>

      <h2>{about.name}</h2>

      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <img src={about.image} alt={about.name} />

  </div>
  )
}

export default About