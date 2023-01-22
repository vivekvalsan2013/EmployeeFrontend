import React from 'react'

const LoadingScreen = () => {
  return (
    <div>
      <div class="d-flex align-items-center">
                <strong style={{color:"whitesmoke"}}>Fetching Employee data</strong>
                <div style={{color:"whitesmoke"}} class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
    </div>
  )
}

export default LoadingScreen
