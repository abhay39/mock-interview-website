import Header from "./_components/Header"

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className=" sticky top-0 w-full backdrop-blur-sm">
        <Header />
      </div>
      <div className=" mx-5 md:mx-20 lg:mx-36">
       {children}  
      </div>
    </div>
  )
}

export default DashboardLayout