import { describe, it, expect } from 'vitest'
import { totalPrice } from './index'

describe('Utils - totalPrice', () => {
  it('should calculate total price of empty array', () => {
    // Arrange
    const products = []
    
    // Act
    const result = totalPrice(products)
    
    // Assert
    expect(result).toBe(0)
  })

  it('should calculate total price for single product', () => {
    // Arrange
    const products = [
      { name: 'Product 1', price: 25.99 }
    ]
    
    // Act
    const result = totalPrice(products)
    
    // Assert
    expect(result).toBe(25.99)
  })

  it('should calculate total price for multiple products', () => {
    // Arrange
    const products = [
      { name: 'Product 1', price: 25.99 },
      { name: 'Product 2', price: 10.50 },
      { name: 'Product 3', price: 5.00 }
    ]
    
    // Act
    const result = totalPrice(products)
    
    // Assert
    expect(result).toBeCloseTo(41.49) // Usamos toBeCloseTo para evitar problemas con números decimales
  })

  it('should handle products with zero price', () => {
    // Arrange
    const products = [
      { name: 'Product 1', price: 0 },
      { name: 'Product 2', price: 10.50 }
    ]
    
    // Act
    const result = totalPrice(products)
    
    // Assert
    expect(result).toBe(10.50)
  })

  it('should throw error when products parameter is undefined', () => {
    // Assert
    expect(() => totalPrice(undefined)).toThrow()
  })
})