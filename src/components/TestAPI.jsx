import { useEffect, useState } from 'react';
import axios from 'axios';

function TestAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/test');  // Sample API endpoint
        setData(response.data.message);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default TestAPI;
