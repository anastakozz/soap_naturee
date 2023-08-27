import { useParams } from 'react-router-dom';

function DetailedProductPage() {
  const { id } = useParams();

  console.log(id);

  return <>DetailedProductPage works!</>;
}

export default DetailedProductPage;
