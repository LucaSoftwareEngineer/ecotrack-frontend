import NavbarComponent from "../NavbarComponent/NavbarComponent.tsx"
import UserProfileFoto from "../../assets/img/user-profile-foto.png"
import useReportTask from "../../hooks/useReportTask.tsx"
import { useAppSelector } from "../../hooks.ts"

const DashboardComponent = () => {
  const { completedTasks, pendingTasks, totalTasks } = useReportTask()

  const email: string = useAppSelector(store => {
    return store.user.email
  })

  return (
    <>
      <NavbarComponent />
      <div>
        <div className="p-4 sm:ml-64">
          <div className="mt-[60px] md:mt-[50px]">
            <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="rounded-t-lg bg-[#6BB848] p-3">
                <a className="cursor-pointer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Dashboard
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <p className="mb-0 font-normal text-gray-700">
                  Benvenuto nella tua Dashboard, in questa pagina puoi vedere i
                  report delle tue attività
                  <br />
                  Utilizzando la sidebar (il menù alla tua sinistra) puoi
                  registrare una nuova attività, impostare uno stato (aperta/in
                  lavorazione/chiusa) oppure vedere l'elenco delle attività
                  registrate.
                </p>
                <br />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2">
              <div className="mt-[25px] w-full rounded-lg border border-gray-200 bg-white shadow-sm md:w-[98%]">
                <div className="rounded-t-lg bg-[#6BB848] p-3">
                  <a className="cursor-pointer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      Dettagli Utente
                    </h5>
                  </a>
                </div>
                <div className="p-5">
                  <table>
                    <tbody>
                      <tr>
                        <td className="p-[5px] text-[#6BB848]">
                          <b>Email:</b>
                        </td>
                        <td className="p-[5px] pl-5 text-gray-950">{email}</td>
                      </tr>
                      <tr>
                        <td className="p-[5px] text-[#6BB848]">
                          <b>Tipologia di account:</b>
                        </td>
                        <td className="p-[5px] pl-5 text-gray-950">Utente</td>
                      </tr>
                      <tr>
                        <td className="p-[5px] text-[#6BB848]">
                          <b>Foto profilo:</b>
                        </td>
                        <td className="p-[5px] pl-5 text-gray-950">
                          <img
                            src={UserProfileFoto}
                            className="w-[30px]"
                            alt="user-profile-photo.PNG"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-[25px] w-full rounded-lg border border-gray-200 bg-white shadow-sm md:w-full">
                <div className="rounded-t-lg bg-[#6BB848] p-3">
                  <a className="cursor-pointer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      Report
                    </h5>
                  </a>
                </div>
                <div className="p-5">
                  <div className="w-full md:w-full lg:w-full">
                    <table>
                      <tbody>
                        <tr>
                          <td className="p-[5px] text-[#6BB848]">
                            <b>Numero totale di attività:</b>
                          </td>
                          <td className="p-[5px] pl-5 text-gray-950">
                            {totalTasks}
                            &nbsp; attività
                          </td>
                        </tr>
                        <tr>
                          <td className="p-[5px] text-[#6BB848]">
                            <b>Numero di attività completate:</b>
                          </td>
                          <td className="p-[5px] pl-5 text-gray-950">
                            {completedTasks}
                            &nbsp; attività
                          </td>
                        </tr>
                        <tr>
                          <td className="p-[5px] text-[#6BB848]">
                            <b>Numero di attività in lavorazione:</b>
                          </td>
                          <td className="p-[5px] pl-5 text-gray-950">
                            {pendingTasks}
                            &nbsp; attività
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardComponent
