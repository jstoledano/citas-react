export const Paciente = ({paciente, setPaciente}) => {
  const {nombre, propietario, mail, fecha, sintomas} = paciente
  return (
    <div className="m-5 bg-slate-50 shadow-lg px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-slate-600 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-slate-600 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-slate-600 uppercase">Correo Electrónico: {''}
        <span className="font-normal normal-case">{mail}</span>
        </p>
        <p className="font-bold mb-3 text-slate-600 uppercase">Fecha de alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-slate-600 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            className="button py-2 px-10 bg-slate-600 hover:bg-slate-800 text-slate-50 font-bold uppercase rounded-md"
            onClick={() => setPaciente(paciente)}>
            Editar</button>

          <button
            className="button py-2 px-10 bg-red-600 hover:bg-red-800 text-slate-50 font-bold uppercase rounded-md">
            Eliminar</button>
        </div>
    </div>
  )
}
