import { useEffect, useState } from 'react';
import Card from './components/Card';
const API_URL = 'https://api.adviceslip.com/advice';

function App() {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL);
        const { slip } = await res.json();
        setAdvice(slip);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function handleClick() {
    setIsLoading(true);
    try {
      const res = await fetch(API_URL);
      const { slip } = await res.json();
      setAdvice(slip);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="px-4 min-h-screen grid place-items-center">
      <Card
        isLoading={isLoading}
        handleClick={handleClick}
        adviceData={advice}
      />
    </div>
  );
}

export default App;
