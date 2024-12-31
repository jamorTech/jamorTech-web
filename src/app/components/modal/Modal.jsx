'use client'

import { useEffect } from 'react'
import styles from './Modal.module.css'
import { userStore } from '@/app/store/userStore'

export default function Modal() {
  const { isOpen, message, type, closeModal } = userStore()

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeModal])

  if (!isOpen) return null

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓'
      case 'error':
        return '✕'
      case 'warning':
        return '⚠'
      default:
        return 'ℹ'
    }
  }

  const getColor = () => {
    switch (type) {
      case 'success':
        return '#006400'
      case 'error':
        return '#8B0000'
      case 'warning':
        return '#856404'
      default:
        return '#2E0052'
    }
  }

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          ×
        </button>
        <div className={styles.content}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: getColor() }}>
            <span style={{ fontSize: '24px' }}>{getIcon()}</span>
            <p style={{ margin: 0, fontSize: '16px' }}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

