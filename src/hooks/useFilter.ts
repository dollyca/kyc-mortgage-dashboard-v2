import { useState } from "react"

export function useFilter() {
  const [selectedMonth, setSelectedMonth] = useState("2025-04")
  const [userId, setUserId] = useState("U001")

  return {
    selectedMonth,
    setSelectedMonth,
    userId,
    setUserId,
  }
}
