import { Paciente } from "./Paciente.jsx"
const ListadoPacientes = () => {
  return (
    <div className={'md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'}>
      <h2 className="font-black text-slate-600 text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {''}
        <span className="text-slate-600 font-bold text-center">Pacientes y Citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  )
}

export default ListadoPacientes