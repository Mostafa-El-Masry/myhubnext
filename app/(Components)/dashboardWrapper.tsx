
import Navbar from "./Navbar/Navbar"
import SideBar from "./SideBar/SideBar"


const DashboardWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="flex w-full min-h-screen">
      <SideBar />
      <main className="flex flex-col w-full h-full py-7 px-9 md:pl-24">
        <Navbar />
      {children}

      </main>
    </div>
  )
}

export default DashboardWrapper
