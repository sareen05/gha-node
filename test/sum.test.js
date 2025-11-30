import { describe, it, expect } from 'vitest'
import { sum } from '../src/sum'

describe('sum', () => {
    it('should add two numbers correctly', () => {
        const result = sum(2, 3)
        expect(result).toBe(5)
        
    })
})