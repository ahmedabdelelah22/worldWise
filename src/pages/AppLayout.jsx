// import AppNav from "../components/AppNav"
import Sidebar from "../components/Sidebar"
import Styles from "./AppLayout.module.css"
import Map from "../components/Map"
import User from "../components/User"

function AppLayout() {
  return (
    <div className={Styles.app}>
    <Sidebar />
    <Map />
    <User />
    </div>
  )
}

export default AppLayout
