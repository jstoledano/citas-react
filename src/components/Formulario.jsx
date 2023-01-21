import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [mail, setMail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha  = Date.now().toString()
    return fecha + random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( [nombre, propietario, mail, fecha, sintomas].includes('') ) {
      console.log('Hay al menos un campo vacío')
      setError(true)
      return;
    } 
    setError(false)

    // Se construye el objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario,
      mail,
      fecha,
      sintomas,
      id: generarId()
    }
    
    // Se agrega el paciente a la lista de pacientes
    setPacientes([...pacientes, objetoPaciente])

    // Se resetea el formulario
    setNombre('')
    setPropietario('')
    setMail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className={"md:w-1/2 lg:w-2/5 px-3"}>
        <h2 className='font-black text-slate-600 text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {''}
          <span className="text-slate-600 font-bold">Adminístralos</span>
        </p>

      <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-xl rounded-md py-10 px-5 mb-10">

        {error && (
          <Error><p>{`Todos los campos SON obligatorios`}</p></Error>
        )}

        <div className="mb-5">
          <label className="block text-slate-700 uppercase font-bold" htmlFor="mascota">Nombre Mascotas</label>
          <input 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id='mascota'
            className="border-2 border-slate-700  w-full p-2 rounded-lg placeholder-slate-600"
            type="text" placeholder='Nombre de la Mascota' />
        </div>

        <div className="mb-5">
          <label className="block text-slate-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
          <input 
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
            id='propietario'
            className="border-2 border-slate-700  w-full p-2 rounded-lg placeholder-slate-600"
            type="text" placeholder='Nombre del Propietario' />
        </div>

        <div className="mb-5">
          <label className="block text-slate-700 uppercase font-bold" htmlFor="mail">Correo Electrónico</label>
          <input 
            value={mail}
            onChange={e => setMail(e.target.value)}
            id='mail'
            className="border-2 border-slate-700  w-full p-2 rounded-lg placeholder-slate-600"
            type="email" placeholder='Correo Electrónico' />
        </div>  

        <div className="mb-5">
          <label className="block text-slate-700 uppercase font-bold" htmlFor="f_alta">Fecha de Alta</label>
          <input 
            value={fecha}
            onChange={e=>setFecha(e.target.value)}
            id='f_alta'
            className="border-2 border-slate-700  w-full p-2 rounded-lg placeholder-slate-600"
            type="date" placeholder='Fecha de Alta' />
        </div>

        <div className="mb-5">
          <label className="block text-slate-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
          <textarea name="sintomas" id="sintomas"
            value={sintomas}
            onChange={e=>setSintomas(e.target.value)}
            placeholder="Describe los síntomas de la Mascota"
            className="border-2 border-slate-500 rounded-lg w-full p-2"
            cols="30" rows="5" />
        </div>

        <input type="submit" name="send" id="send"  value={'Agregar Paciente'}
          className="bg-slate-600 w-full p-3 text-slate-100 uppercase font-bold rounded-lg hover:bg-slate-800 cursor-pointer transition-opacity" />   

      </form>

    </div>
  )
}

export default Formulario