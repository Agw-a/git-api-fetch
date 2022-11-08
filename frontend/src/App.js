import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { EntireApplication } from './modules/modules';
import FallBackError from './components/fallBackError';
import ErrorHandler from './components/errorHandler';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={<FallBackError/>} onError={ErrorHandler}>
      <EntireApplication/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
