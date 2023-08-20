interface MessageProps {
  message: string
}

export default function ErrorMessage({ message }: MessageProps) {
  return (
    <div className='bg-red-500/50 p-4 rounded-md mb-8 flex'>
      <img src='/images/attention-circle-svgrepo-com.svg' alt='' width='24px' className='mr-4' />
      <p>{message}</p>
    </div>
  )
}

