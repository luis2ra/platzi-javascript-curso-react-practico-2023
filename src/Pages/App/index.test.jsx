import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './index'

describe('App', () => {
  it('should render without crashing', () => {
    // Arrange & Act
    const { container } = render(<App />)
    
    // Assert
    expect(container).toBeDefined()
  })
})
