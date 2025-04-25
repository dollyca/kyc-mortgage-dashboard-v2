import { useEffect, useState } from "react"
import { fetchCreditData } from "@/services/api"

export function useCreditChart(month: string, userId: string) {
  const [labels, setLabels] = useState<string[]>([])
  const [dataSet, setDataSet] = useState<number[]>([])

  useEffect(() => {
    fetchCreditData(month, userId).then(res => {
      setLabels(res.labels)
      setDataSet(res.data)
    })
  }, [month, userId])

  return { labels, dataSet }
}
