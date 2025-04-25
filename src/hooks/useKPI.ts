import { useEffect, useState } from "react"
import { fetchKPI } from "@/services/api"

export function useKPI(month: string, userId: string) {
  const [data, setData] = useState({ approved: 0, pending: 0, newCases: 0 })

  useEffect(() => {
    fetchKPI(month, userId).then(setData)
  }, [month, userId])

  return data
}
