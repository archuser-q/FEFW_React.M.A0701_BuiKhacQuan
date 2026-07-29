import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EmailBoxComponent from './components/EmailBoxComponent';
import EmailPreviewComponent from './components/EmailPreviewComponent';
import EmailDetailComponent from './components/EmailDetailComponent';
import messages from './data/messages.json';
import { USERS } from './data/constants';

function MessagesPage() {
  const [currentUser, setCurrentUser] = useState(USERS[0]);
  const [currentFolder, setCurrentFolder] = useState('inbox');
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const userMessages = messages.filter((m) => m.to === currentUser);

  const folderMessages = userMessages.filter((m) => m.folder === currentFolder);

  const selectedEmail = folderMessages.find((m) => m._id === selectedEmailId);

  return (
    <>
      <Header currentUser={currentUser} onChangeUser={setCurrentUser} />
      <div className="d-flex">
        <EmailBoxComponent
          currentFolder={currentFolder}
          onSelectFolder={(folder) => {
            setCurrentFolder(folder);
            setSelectedEmailId(null);
          }}
        />
        <EmailPreviewComponent
          emails={folderMessages}
          selectedEmailId={selectedEmailId}
          onSelectEmail={setSelectedEmailId}
        />
      </div>
      {selectedEmail && <EmailDetailComponent email={selectedEmail} />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/FEFW_React.M.A0701_BuiKhacQuan/">
      <Routes>
        <Route path="/" element={<MessagesPage />} />
        <Route path="/contacts" element={<UnderConstruction />} />
        <Route path="/preferences" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}

function UnderConstruction() {
  return (
    <>
      <Header currentUser={USERS[0]} onChangeUser={() => {}} />
      <div className="p-4">This page is under construction</div>
    </>
  );
}

export default App;