import React from 'react'

const About = () => {

  const goToContant = () => {
    alert ("kida")
  }

  return (
   <>
    <section>
        <h2>About Page</h2>
        <button onClick={() => {goToContant()}}>goto Contact Page</button>
    </section>

   </>
  )
}

export default About