// import StatusLabel, { Status } from './components/status-label';

import AddCompanyButton from './components/add-company-button';
// import ServerComponent from './components/server-component';
// import ClientComponent from './components/client-component';
// import ServerComponentCopy from './components/server-component';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      {/* <ServerComponent />
      <ClientComponent> */}
      {/* <ServerComponentCopy /> */}
    </main>
  );
}
