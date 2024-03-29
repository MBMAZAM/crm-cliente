import { obtenerCliente } from '../data/clientes'


export async function loader({ params }) {
    
  const cliente = await obtenerCliente(params.clientId);

  if(Object.values(cliente).length === 0 ) {
    throw new Response('' , {
      status: 404,
      statusText: 'Not Hay resultados para mostrar'
    })
  }



    return cliente
}

