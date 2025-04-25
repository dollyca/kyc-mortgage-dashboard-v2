import { useEffect, useState } from "react"
import { fetchRepayment } from "@/services/api"

export function useRepayment(month: string, userId: string) {
  const [progress, setProgress] = useState<number | null>(null)

  useEffect(() => {
    fetchRepayment(month, userId).then(res => setProgress(res.progress))
  }, [month, userId])

  return progress
}
