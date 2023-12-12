describe("concatOdds function", () => {
    it("should return an array containing only odd numbers in ascending order from two input arrays", () => {
      // Test Case 1: Regular inputs
      let result = concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]);
      expect(result).toEqual([-1, 1, 3, 9, 15]);
  
      // Test Case 2: Empty arrays
      result = concatOdds([], []);
      expect(result).toEqual([]);
  
      // Test Case 3: Both arrays with only even numbers
      result = concatOdds([2, 4, 6], [8, 10]);
      expect(result).toEqual([]);
  
      // Test Case 4: Arrays with negative odd numbers
      result = concatOdds([-3, -7, -5], [-9, -1, -1]);
      expect(result).toEqual([-9, -7, -5, -3, -1]);
  
      // Test Case 5: Arrays with multiples of the same odd number
      result = concatOdds([1, 1, 3, 5, 7], [3, 5, 5, 9, 11]);
      expect(result).toEqual([1, 3, 5, 7, 9, 11]);
  
      // Test Case 6: Arrays with mixed even and odd numbers
      result = concatOdds([2, 4, 6], [1, 3, 5]);
      expect(result).toEqual([1, 3, 5]);
      
      // Test Case 7: Unexpected inputs (non-array inputs)
      result = concatOdds("hello", 123);
      expect(result).toEqual([]);
      
      // Test Case 8: Unexpected inputs (non-integer inputs)
      result = concatOdds([1, 2, "three"], [4, 5, {}]);
      expect(result).toEqual([]);
    });
  });