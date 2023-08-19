interface MessageProps {
  message: string
}

export default function ErrorMessage({ message }: MessageProps) {
  return (
    <div className='w-full text-red-500'>
      <h4>Oops! </h4>
      <p>{message}</p>
    </div>
  )
}
