import { useNavigate } from "react-router"
import icons8AddProperties48 from "../../assets/img/icons8-add-properties-48.png"
import Icons8Dashboard94 from "../../assets/img/icons8-dashboard-94.png"

const SidebarComponent = (props: { sidebarClasse: string }) => {
  const navigate = useNavigate()

  return (
    <>
      <aside
        id="logo-sidebar"
        className={props.sidebarClasse}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto border-l-[#6BB848] bg-white px-0 pb-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                onClick={() => {
                  navigate("/dashboard")
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#6BB848] py-2 pl-[20px] text-[#6BB848] hover:bg-[#6BB848] hover:text-white"
              >
                <img
                  src={Icons8Dashboard94}
                  className="h-5 w-5"
                  alt="dashboard-icon"
                />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
          </ul>
          <div className="mt-[25vh] p-[25px] text-center text-gray-500 md:mt-[35vh]">
            <i>Progettato e sviluppato dal Dott. Luca Santoro</i>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SidebarComponent
