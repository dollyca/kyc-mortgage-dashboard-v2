// src/services/api.ts

export const fetchCreditScoreDistribution = async (
    month = "2025-04",
    userId = "U001"
  ) => {
    return new Promise<{ labels: string[]; data: number[] }>((resolve) =>
      setTimeout(() => {
        const fakeData = {
          "2025-04": {
            U001: [12, 25, 38, 20, 5],
            U002: [5, 15, 25, 30, 10],
          },
          "2025-03": {
            U001: [10, 20, 30, 30, 10],
            U002: [8, 18, 22, 40, 12],
          },
          "2025-02": {
            U001: [15, 20, 25, 20, 20],
            U002: [10, 15, 30, 30, 15],
          },
        }
  
        resolve({
          labels: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
          data: fakeData[month]?.[userId] ?? [0, 0, 0, 0, 0],
        })
      }, 800)
    )
  }
  

export const fetchRepaymentProgress = async () => {
    return new Promise<{ progress: number }>((resolve) =>
        setTimeout(() => {
            resolve({ progress: 73 }) // 👈 你想要的進度值
        }, 500)
    )
}


