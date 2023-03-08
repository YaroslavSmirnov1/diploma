import React, {useState} from 'react';
import '../styles/App.css';
import MachineListPublic from './MachineListPublic'
import Header from "./Header";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";
import {OpenAPI} from "../api";
import NavigationBar from "./NavigationBar";
import ModelMachineList from "./ReferenceBook/ModelMachineList";
import ModelDriveAxleList from "./ReferenceBook/ModelDriveAxleList";
import ModelEngineList from "./ReferenceBook/ModelEngineList";
import ModelSteeringAxleList from "./ReferenceBook/ModelSteeringAxleList";
import ModelTransmissionList from "./ReferenceBook/ModelTransmissionList";
import RecoveryMethodList from "./ReferenceBook/RecoveryMethodList";
import TypeMaintenanceList from "./ReferenceBook/TypeMaintenanceList";
import TypeFailureList from "./ReferenceBook/TypeFailureList";
import ServiceCompanyList from "./ReferenceBook/ServiceCompanyList";
import MachineListPrivate from "./MachineListPrivate";
import MaintenanceList from "./MaintenanceList";
import ClaimList from "./ClaimList";
import MachineItem from "./MachineItem";
import RefBookItem from "./RefBookItem";


function App() {
    const [name, setName] = useState(localStorage.getItem('name'));
    const [catUser, setCatUser] = useState(localStorage.getItem('catUser'));
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
    const [token, setToken] = useState(localStorage.getItem('Token'));
    if (token != null) {
        OpenAPI.HEADERS = {
            Authorization: `Token ${token}`
        }
    }
    return (
      <div className="font-face-as">
          <div className="App">
              <Header
                  setIsLoggedIn={setIsLoggedIn} setToken={setToken} setName={setName} setCatUser={setCatUser}
                  isLoggedIn={isLoggedIn}/>
              {isLoggedIn !== 'true' && <MachineListPublic/>}
              {isLoggedIn === 'true' &&
                  <>
                      <NavigationBar name={name} catUser={catUser}/>
                      <Routes>
                          <Route path="/" element={<MachineListPrivate catUser={catUser} />}/>
                          <Route path="/refbook" element={<RefBookItem />}/>
                          <Route path="/machineitem" element={<MachineItem catUser={catUser} />}/>
                          <Route path="/maintenance" element={<MaintenanceList isLoggedIn={isLoggedIn}/>}/>
                          <Route path="/claim" element={<ClaimList catUser={catUser} isLoggedIn={isLoggedIn}/>}/>
                          {catUser === 'MG' &&
                              <>
                                  <Route path="/modelmachine" element={<ModelMachineList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/modeldriveaxle"
                                         element={<ModelDriveAxleList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/modelengine" element={<ModelEngineList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/modelsteeringaxle"
                                         element={<ModelSteeringAxleList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/modeltransmission"
                                         element={<ModelTransmissionList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/recoverymethod"
                                         element={<RecoveryMethodList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/typemaintenance"
                                         element={<TypeMaintenanceList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/typefailure" element={<TypeFailureList isLoggedIn={isLoggedIn}/>}/>
                                  <Route path="/servicecompany"
                                         element={<ServiceCompanyList isLoggedIn={isLoggedIn}/>}/>
                              </>
                          }
                      </Routes>
                  </>
              }
              <Footer/>
          </div>
      </div>
  );
}

export default App;

