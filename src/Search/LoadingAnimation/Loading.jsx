import React from 'react'
import styles from './Loading.style';
function Loading() {
  return (
    
    <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
    </div>
  )
}

export default Loading