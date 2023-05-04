import React, { useState, useEffect } from 'react'
import { useHistory, useParams} from 'react-router-dom'

import './UploadPage.css'

function UploadPage() {
  const history = useHistory()
  const { game, character } = useParams()

  useEffect(() => {
    
  }, [])

  return (
    <div className = 'upload-combo-page'>
      <div className = 'combo-details-container'>
        Combo Details
      </div>
      <div className = 'combo-builder-container'>
        Combo Builder
      </div>
      <div className = 'combo-video-container'>
        Combo Video
      </div>
    </div>
  )
}

export default UploadPage