import { Paciente } from "./Paciente.jsx"
const ListadoPacientes = ({pacientes}) => {
  return (
    <div className={'md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'}>
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-slate-600 text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-slate-600 font-bold text-center">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente 
                key={paciente.id}
                paciente={paciente}
          />)
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-slate-600 text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Registra tus {''}
            <span className="text-slate-600 font-bold text-center">Pacientes y Citas</span>
          </p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes
