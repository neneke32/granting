import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GrantingPageProvider } from 'pages/GrantingPageProvider';
import { AppProvider } from 'pages/AppProvider';
import { GrantingPage } from 'pages/GrantingPage';

function App() {
  return (
    <div className="App">
      
      <AppProvider>
        <GrantingPageProvider id={"2766fc9a-b095-11ed-9bd8-0242ac110002"}/>
      </AppProvider>
    </div>
  );
}

export default App;
