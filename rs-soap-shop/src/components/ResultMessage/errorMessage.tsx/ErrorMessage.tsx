interface MessageProps {
  message: string;
}

export default function ErrorMessage({ message }: MessageProps) {
  return (
    <div data-testid='reg-error-message' className='bg-errorColor p-4 rounded-md mb-8 flex'>
      <img src='/images/attention-circle-svgrepo-com.svg' alt='' width='24px' className='mr-4' />
      <p>{message}</p>
    </div>
  );
}
