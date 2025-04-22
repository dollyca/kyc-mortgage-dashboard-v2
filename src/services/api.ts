// src/services/api.ts

export const fetchCreditScoreDistribution = async (
    month = "2025-04",
    userId = "U001"
  ) => {
    return new Promise<{ labels: string[]; data: number[] }>((resolve) =>
      setTimeout(() => {
        const fakeData: Record<string, Record<string, number[]>> = {
          "2025-04": { U001: [10, 20, 35, 25, 10], U002: [15, 25, 20, 30, 10] },
          "2025-03": { U001: [8, 18, 28, 24, 12], U002: [12, 22, 32, 20, 14] },
          "2025-02": { U001: [5, 10, 20, 30, 35], U002: [7, 14, 21, 28, 30] },
        }
        
  
        resolve({
          labels: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
          data: fakeData[month]?.[userId] ?? [0, 0, 0, 0, 0],
        })
      }, 800)
    )
  }
  

  export const fetchRepaymentProgress = async (
    month = "2025-04",
    userId = "U001"
  ) => {
    return new Promise<{ progress: number }>((resolve) =>
      setTimeout(() => {
        const fakeProgress: Record<string, Record<string, number>> = {
          "2025-04": { U001: 73, U002: 60 },
          "2025-03": { U001: 55, U002: 42 },
          "2025-02": { U001: 88, U002: 70 },
        }
  
        resolve({
          progress: fakeProgress[month]?.[userId] ?? 0,
        })
      }, 500)
    )
  }
  


