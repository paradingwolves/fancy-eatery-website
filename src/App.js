// import `RouterProvider` component
import { RouterProvider } from 'react-router-dom';
//  import `router` property
import {router} from './lib/routes';


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

