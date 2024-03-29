import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {



  // const location = useLocation();
  const { pathname  } = useLocation(); //Este es para saber en que ruta estoy

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>

        <nav className='mt-10'>
          <Link
            className={`${pathname == '/' ? "text-blue-300" : "text-white"}  text-2xl block mt-2  hover:text-blue-300`}
            to='/'>
            Clientes
          </Link>
          <Link
            className={`${pathname == '/client/new' ? "text-blue-300" : "text-white"}  text-2xl block mt-2 hover:text-blue-300`}
            to='/client/new'>
            Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <div className='md:w-3/4 p-10 md:h-screen overflow-scroll  '>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout