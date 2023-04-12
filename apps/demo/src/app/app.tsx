import { useMyHook } from '@jest-mocking-sample/lib-one';

export function App() {
  const { count, increment } = useMyHook();

  return (
    <>
      <p data-testid="count"> Count: {count} </p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
