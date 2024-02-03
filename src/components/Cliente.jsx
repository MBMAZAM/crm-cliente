import { PropTypes } from 'prop-types'
import { Form, useNavigate, redirect } from 'react-router-dom'


const Cliente = ({ cliente }) => {

  const { id, nombre, telefono, email, empresa } = cliente;
  const navigate = useNavigate();

  return (
    <tr>
      <td className="p-6 space-y-2">
        <p className='text-sm text-gray-800'>{nombre}</p>
        <p className=''>{empresa}</p>
      </td>
      <td className='p-6 '>
        <p className='text-gray-600'> <span className='text-gray-800 uppercase font-bold'>Email: </span> {email} </p>
        <p className='text-gray-600'> <span className='text-gray-800 uppercase font-bold'>Tel: </span> {telefono} </p>
      </td>
      <td className='p-6 flex gap-3 '>
        <button type='button' className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs' onClick={() => navigate(`/client/${id}/editar`)}>
          Editar
        </button>
        <Form
          method='POST'
          action={`/client/${id}/eliminar`}
          onSubmit={(e)=> {
            if(!confirm('¿Estás seguro de eliminar el cliente?')) {
              e.preventDefault()
              redirect(`/client/${id}/eliminar`)
            }
          }}
        >
          <button type='submit' className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'>
            Eliminar
          </button>
        </Form>
      </td>
    </tr>

  )
}

Cliente.propTypes = {
  cliente: PropTypes.object.isRequired
}


export default Cliente