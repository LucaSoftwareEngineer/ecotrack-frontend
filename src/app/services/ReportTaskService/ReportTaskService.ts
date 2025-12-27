import axios from "axios"
import { API } from "../../api.config"
import { IReportTaskResponse } from "./IReportTaskResponse"

const ReportTaskService = (props:{idUser: number, token: string}) => {
  return axios.get<IReportTaskResponse>(
    API.reportTask.concat("/").concat(props.idUser.toString()),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    },
  )
}

export default ReportTaskService
