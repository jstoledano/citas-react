const Error = ({mensaje}) => {
  return (
    <div className='bg-red-400 font-bold text-2xl rounded-md text-center text-red-50 p-4 mb-4'>
        <p>{`${mensaje}`}</p>
    </div>
  )
}

export default Error
