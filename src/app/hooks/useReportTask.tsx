import { useEffect, useState } from "react"
import ReportTaskService from "../services/ReportTaskService/ReportTaskService"
import { useAppSelector } from "../hooks"

const useReportTask = () => {
  const [totalTasks, setTotalTasks] = useState<number>()
  const [completedTasks, setCompletedTasks] = useState<number>()
  const [pendingTasks, setPendingTasks] = useState<number>()

  const idUser: number | null = useAppSelector(store => {
    return store.user.id
  })

  if (idUser == null) {
    throw new Error("idUser is null")
  }

  const token: string = useAppSelector(store => {
    return store.user.token
  })

  useEffect(() => {
    ReportTaskService({ idUser: idUser, token: token }).then(res => {
      setTotalTasks(res.data.totalTasks)
      setCompletedTasks(res.data.completedTasks)
      setPendingTasks(res.data.pendingTasks)
    })
  }, [])

  return { totalTasks, completedTasks, pendingTasks }
}

export default useReportTask
