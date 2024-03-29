import { useNavigate, Form, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario';
import Error from '../components/Error';



const NewClient = () => {

  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para registar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}


        <Form method='POST' noValidate>
          <Formulario />

          <input
            type="submit"
            value="Registrar Cliente"
            className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer'
          />
        </Form>

      </div>

    </>

  )
}

export default NewClient