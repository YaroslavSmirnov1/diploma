import {useLocation, useNavigate} from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/Container";
import '../styles/MachineItem.css';
import Accordion from 'react-bootstrap/Accordion';
import Table from "react-bootstrap/Table";
import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import {
    ApiError,
    Claim,
    ClaimService,
    MachineService,
    Maintenance,
    MaintenanceService,
    ModelDriveAxle,
    ModeldriveaxleService,
    ModelEngine,
    ModelengineService,
    ModelMachine,
    ModelmachineService,
    ModelSteeringAxle,
    ModelsteeringaxleService,
    ModelTransmission,
    ModeltransmissionService, RecoveryMethod, RecoverymethodService,
    ServiceCompany,
    ServicecompanyService,
    TypeFailure, TypefailureService,
    TypeMaintenance,
    TypemaintenanceService,
    UserSilant,
    UsgroupService
} from "../api";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MaintenanceItem from "./MaintenanceItem";
import ClaimItem from "./ClaimItem";

function MachineItem({catUser}:any) {
    const location = useLocation();
    const {MachineItem} = location.state;
    const [maintenances, setMaintenances] = useState<Maintenance[]>();
    const [claims, setClaims] = useState<Claim[]>();
    async function loadMaintenanceFilter(serNumM:string) {
        setMaintenances(await MaintenanceService.maintenanceList(serNumM));
    }
    async function loadClaimFilter(serNumM:string) {
        setClaims(await ClaimService.claimList(serNumM));
    }
    useEffect(() => {
        loadMaintenanceFilter(MachineItem.serNumM); loadClaimFilter(MachineItem.serNumM); loadModM();
        loadModE(); loadModT(); loadModD(); loadModS(); loadSerCom(); loadUsr(); loadTypMains();
        loadTypFails(); loadRecMets();
    }, [MachineItem.serNumM]);

    const [show, setShow] = useState(false);
    const [showM, setShowM] = useState(false);
    const [showC, setShowC] = useState(false);
    //Загрузка справочников
    const [modM, setModM] = useState<ModelMachine[]>();
    const [modE, setModE] = useState<ModelEngine[]>();
    const [modT, setModT] = useState<ModelTransmission[]>();
    const [modD, setModD] = useState<ModelDriveAxle[]>();
    const [modS, setModS] = useState<ModelSteeringAxle[]>();
    const [serCom, setSerCom] = useState<ServiceCompany[]>();
    const [usr, setUsr] = useState<UserSilant[]>();
    const [typMains, setTypMains] = useState<TypeMaintenance[]>();
    const [recMets, setRecMets] = useState<RecoveryMethod[]>();
    const [typFails, setTypFails] = useState<TypeFailure[]>();


    const loadTypFails  = async () => {
        setTypFails(await TypefailureService.typefailureList());
    };
    const loadRecMets  = async () => {
        setRecMets(await RecoverymethodService.recoverymethodList());
    };
    const loadTypMains  = async () => {
        setTypMains(await TypemaintenanceService.typemaintenanceList());
    };
    const loadModM  = async () => {
        setModM(await ModelmachineService.modelmachineList());
    };
    const loadModE  = async () => {
        setModE(await ModelengineService.modelengineList());
    };
    const loadModT  = async () => {
        setModT(await ModeltransmissionService.modeltransmissionList());
    };
    const loadModD  = async () => {
        setModD(await ModeldriveaxleService.modeldriveaxleList());
    };
    const loadModS  = async () => {
        setModS(await ModelsteeringaxleService.modelsteeringaxleList());
    };
    const loadSerCom  = async () => {
        setSerCom(await ServicecompanyService.servicecompanyList());

    };
    const loadUsr  = async () => {
        setUsr(await UsgroupService.usgroupList());

    };
    const [serNumM, setSerNumM] = useState(MachineItem.serNumM);
    const [modM_i, setModM_i] = useState(MachineItem.modelm_title);
    const [modE_i, setModE_i] = useState(MachineItem.modele_title);
    const [serNumE, setSerNumE] = useState(MachineItem.serNumE);
    const [modT_i, setModT_i] = useState(MachineItem.modelt_title);
    const [serNumT, setSerNumT] = useState(MachineItem.serNumT);
    const [modD_i, setModD_i] = useState(MachineItem.modelda_title);
    const [serNumD, setSerNumD] = useState(MachineItem.serNumDA);
    const [modS_i, setModS_i] = useState(MachineItem.modelsa_title);
    const [serNumS, setSerNumS] = useState(MachineItem.serNumSA);
    const [contract, setContract] = useState(MachineItem.NumSupContract);
    const [dateShF, setDateShF] = useState(MachineItem.dateShipmentFactory);
    const [consignee, setConsignee] = useState(MachineItem.consignee);
    const [address, setAddress] = useState(MachineItem.addressOperation);
    const [equipment, setEquipment] = useState(MachineItem.equipment);
    const [serCom_i, setSerCom_i] = useState(MachineItem.service_company);
    const [nUsr_i, setNUsr_i] = useState(MachineItem.user);
    const [_modM_i, _setModM_i] = useState<any>();
    const [_modE_i, _setModE_i] = useState<any>();
    const [_modT_i, _setModT_i] = useState<any>();
    const [_modD_i, _setModD_i] = useState<any>();
    const [_modS_i, _setModS_i] = useState<any>();
    const [_serCom_i, _setSerCom_i] = useState<any>();
    const [usr_i, setUsr_i] = useState<any>();
    const [typMainID, setTypMainID] = useState<any>();
    const [dateMan, setDateMan] = useState('');
    const [opTime, setOpTime] = useState<any>();
    const [worOr, setWorOr] = useState('');
    const [dateWor, setDateWor] = useState('');
    const [serComId, setSerComId] = useState<any>();
    const [dateRej, setDateRej] = useState('');
    const [opTimeC, setOpTimeC] = useState<any>();
    const [fiDesc, setFiDesc] = useState('');
    const [recMetID, setRecMetID] = useState<any>();
    const [spPart, setSpPart] = useState('');
    const [dateRec, setDateRec] = useState('');
    const [typFailID, setTypFailID] = useState<any>();


    function Update(idUsr: number, idmodM: number, idmodE: number, idmodT: number, idmodD: number,
                    idmodS: number, idserCom: number) {
        MachineService.machineUpdate(
            MachineItem.id,
            { NumSupContract: contract, addressOperation: address, consignee: consignee,
                dateShipmentFactory: dateShF, equipment: equipment, modelDA: idmodD, modelE: idmodE,
                modelM: idmodM, modelSA: idmodS, modelT: idmodT, serNumDA: serNumD, serNumE: serNumE,
                serNumM: serNumM, serNumSA: serNumS, serNumT: serNumT, userClient: idUsr,
                userService: idserCom,
        }).then(() => {
                setShow(false);
            window.location.reload();
            }
        ).catch((err:ApiError) => {
            console.log(JSON.stringify(err))
        })
    }

    function handleUpdate() {
        let idUsr: number = 0; let idmodM: number = 0; let idmodE: number = 0; let idmodT: number = 0;
        let idmodD: number = 0; let idmodS: number = 0; let idserCom: number = 0;

        if (usr_i) { setNUsr_i(usr_i.user_name); idUsr = usr_i.id }
        else { idUsr = MachineItem.userClient; }

        if (_modM_i) {setModM_i(_modM_i.title); idmodM = _modM_i.id;}
        else {idmodM = MachineItem.modelM;}

        if (_modE_i) {setModE_i(_modE_i.title); idmodE = _modE_i.id;}
        else {idmodE = MachineItem.modelE;}

        if (_modT_i) {setModT_i(_modT_i.title); idmodT = _modT_i.id;}
        else {idmodT = MachineItem.modelT;}

        if (_modD_i) {setModD_i(_modD_i.title); idmodD = _modD_i.id;}
        else {idmodD = MachineItem.modelDA;}

        if (_modS_i) {setModS_i(_modS_i.title); idmodS = _modS_i.id;}
        else {idmodS = MachineItem.modelSA;}

        if (_serCom_i) {setSerCom_i(_serCom_i.title); idserCom = _serCom_i.id;}
        else {idserCom = MachineItem.userService;}

        Update(idUsr, idmodM, idmodE, idmodT, idmodD, idmodS, idserCom);
    }
    function handleClose() {setShowM(false);}
    const navigate = useNavigate();
    function Delete() {
        MachineService.machineDelete(MachineItem.id).then(() => {
            navigate('/');
            }
        ).catch((err:ApiError) => {
            alert('Нельзя удалить машину, в базе имеются сведения об обслуживании или рекламации для' +
                ' данной машины. Удалите сначала сведения об обслуживании и рекламации.')
            console.log(JSON.stringify(err));
        })
    }

    function saveCla() {
        ClaimService.claimCreate(
            {
                dateRecovery: dateRec,
                dateRejection: dateRej,
                failDescription: fiDesc,
                machine: MachineItem.id,
                operTime: opTimeC,
                recMethod: recMetID,
                spareParts: spPart,
                typeFailure: typFailID
            }
        ).then(() => {
            setShowM(false);
            window.location.reload();
        }).catch((err:ApiError) => {
            console.log(JSON.stringify(err));
            alert('Все поля обязательны для заполнения. У вас есть незаполненые поля.');
        })

    }

    function saveMan() {
        MaintenanceService.maintenanceCreate(
            {
                date: dateMan, dateWorkOrder: dateWor, machine: MachineItem.id, operTime: opTime,
                serviceCompany: serComId, type: typMainID, workOrder: worOr

            }
        ).then(() => {
            setShowM(false);
            window.location.reload();
        }).catch((err:ApiError) => {
            console.log(JSON.stringify(err));
            alert('Все поля обязательны для заполнения. У вас есть незаполненые поля.');
        })
    }
    return (
        <div >
           <Stack  direction="horizontal" gap={5}>
               <Container id='cont'>
                   <div className="bg-light border">
                        <h4>Машина № {MachineItem.id}</h4>
                   </div>
               </Container>
               <Container id='cont'>
                   <div className="bg-light border">
                       <h4>Заводской номер: {MachineItem.serNumM}</h4>
                   </div>
               </Container>
           </Stack>
            <Accordion id='accor' alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h5 id='accor-body'>Информация о комплектации и технических характеристиках</h5>
                    </Accordion.Header>
                    <Accordion.Body >
                        {catUser === 'MG' &&
                            <div id='but-muchitem1'>
                                <Button variant="outline-secondary" onClick={() => setShow(true)}>
                                    Редактировать машину
                                </Button>
                                <Modal
                                    show={show}
                                    onHide={() => setShow(false)}
                                    dialogClassName="modal-90w"
                                    aria-labelledby="example-custom-modal-styling-title"
                                    fullscreen={true}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            Редактирование информации о комплектации и технических характеристиках
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="table1">
                                            <h5>Технические характеристики</h5>
                                            <Table striped bordered hover className={"table12"} size="sm">
                                                <thead>
                                                <tr>
                                                    <th>Зав. № машины</th>
                                                    <th>Модель машины</th>
                                                    <th>Модель двигателя</th>
                                                    <th>Зав. № двигателя</th>
                                                    <th>Модель трансмиссии</th>
                                                    <th>Зав. № трансмиссии</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={serNumM}
                                                                      onChange={e => setSerNumM(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Select aria-label="" size="sm"
                                                                     onChange={(e) => {
                                                                         if (modM) {
                                                                             _setModM_i(modM[e.target.selectedIndex]);
                                                                         }
                                                                     }}>
                                                            {modM && modM.map((i) => {
                                                                return <option id={modM_i} selected key={i.id}>
                                                                    {i.title}
                                                                </option>;
                                                            })});
                                                        </Form.Select>
                                                    </td>
                                                    <td>
                                                        <Form.Select aria-label="" size="sm"
                                                                     onChange={(e) => {
                                                                         if (modE) {
                                                                             _setModE_i(modE[e.target.selectedIndex]);
                                                                         }
                                                                     }}>
                                                            {modE && modE.map((i) => {
                                                                return <option id={modE_i} selected key={i.id}>
                                                                    {i.title}
                                                                </option>;
                                                            })});
                                                        </Form.Select>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={serNumE}
                                                                      onChange={e => setSerNumE(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Select aria-label="" size="sm"
                                                                     onChange={(e) => {
                                                                         if (modT) {
                                                                             _setModT_i(modT[e.target.selectedIndex]);
                                                                         }
                                                                     }}>
                                                            {modT && modT.map((i) => {
                                                                return <option id={modT_i} selected
                                                                               key={i.id}>{i.title}</option>;
                                                            })});
                                                        </Form.Select>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={serNumT}
                                                                      onChange={e => setSerNumT(e.target.value)}/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                            <Table striped bordered hover className={"table12"} size="sm">
                                                <thead>
                                                <tr>
                                                    <th>Модель ведущего моста</th>
                                                    <th>Зав. № ведущего моста</th>
                                                    <th>Модель управляемого моста</th>
                                                    <th>Зав. № управляемого моста</th>
                                                    <th>Договор поставки №, дата</th>
                                                    <th>Дата отгрузки с завода</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Form.Select aria-label="" size="sm"
                                                                     onChange={(e) => {
                                                                         if (modD) {
                                                                             _setModD_i(modD[e.target.selectedIndex]);
                                                                         }
                                                                     }}>
                                                            {modD && modD.map((i) => {
                                                                return <option id={modD_i} selected key={i.id}>
                                                                    {i.title}
                                                                </option>;
                                                            })});
                                                        </Form.Select>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={serNumD}
                                                                      onChange={e => setSerNumD(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Select aria-label="" size="sm"
                                                                     onChange={(e) => {
                                                                         if (modS) {
                                                                             _setModS_i(modS[e.target.selectedIndex]);
                                                                         }
                                                                     }}>
                                                            {modS && modS.map((i) => {
                                                                return <option id={modS_i} selected
                                                                               key={i.id}>{i.title}</option>;
                                                            })});
                                                        </Form.Select>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={serNumS}
                                                                      onChange={e => setSerNumS(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={contract}
                                                                      onChange={e => setContract(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="date" value={dateShF}
                                                                      onChange={e => setDateShF(e.target.value)}/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                            <h5>Комплектация и иные сведения</h5>
                                            <Table striped bordered hover className={"table12"} size="sm">
                                                <thead>
                                                <tr>
                                                    <th>Грузополучатель (конечный потребитель)</th>
                                                    <th>Адрес поставки (эксплуатации)</th>
                                                    <th>Комплектация (доп. опции)</th>
                                                    <th>Сервисная компания</th>
                                                    <th>Клиент</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={consignee}
                                                                      onChange={e => setConsignee(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={address}
                                                                      onChange={e => setAddress(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Control size="sm" type="text" value={equipment}
                                                                      onChange={e => setEquipment(e.target.value)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Select aria-label="" size="sm"
                                                                     onChange={(e) => {
                                                                         if (serCom) {
                                                                             _setSerCom_i(serCom[e.target.selectedIndex]);
                                                                         }
                                                                     }}>
                                                            {serCom && serCom.map((i) => {
                                                                return <option id={serCom_i} selected key={i.id}>
                                                                    {i.title}
                                                                </option>;
                                                            })});
                                                        </Form.Select>
                                                    </td>
                                                    <td>
                                                        <Form.Select aria-label='' size="sm"
                                                                     onChange={(e) => {
                                                                         if (usr) {
                                                                             setUsr_i(usr[e.target.selectedIndex]);
                                                                         }
                                                                     }}>
                                                            {usr && usr.map((i) => {
                                                                return < option id={nUsr_i} selected key={i.id}>
                                                                    {i.user_name}
                                                                </option>;
                                                            })});
                                                        </Form.Select>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div id='button'>
                                            <Button variant="outline-secondary" onClick={handleUpdate}>
                                                Сохранить
                                            </Button>
                                            <Button variant="outline-secondary" onClick={handleClose}>
                                                Отменить
                                            </Button>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                <Button variant="outline-secondary" onClick={Delete}>Удалить машину</Button>
                            </div>
                        }
                        <div className="table1">
                            <h5>Технические характеристики</h5>
                            <Table striped bordered hover className={"table12"} size="sm">
                                <thead>
                                <tr>
                                    <th>Модель машины</th>
                                    <th>Модель двигателя</th>
                                    <th>Зав. № двигателя</th>
                                    <th>Модель трансмиссии</th>
                                    <th>Зав. № трансмиссии</th>
                                    <th>Модель ведущего моста</th>
                                    <th>Зав. № ведущего моста</th>
                                    <th>Модель управляемого моста</th>
                                    <th>Зав. № управляемого моста</th>
                                </tr>
                                </thead>
                                <tbody><tr>
                                    <td>{modM_i}</td>
                                    <td>{modE_i}</td>
                                    <td>{MachineItem.serNumE}</td>
                                    <td>{modT_i}</td>
                                    <td>{MachineItem.serNumT}</td>
                                    <td>{modD_i}</td>
                                    <td>{MachineItem.serNumDA}</td>
                                    <td>{modS_i}</td>
                                    <td>{MachineItem.serNumSA}</td>
                                </tr></tbody>
                            </Table>
                            <h5>Комплектация и иные сведения</h5>
                            <Table striped bordered hover className={"table12"} size="sm">
                                <thead>
                                <tr>
                                    <th>Договор поставки №, дата</th>
                                    <th>Дата отгрузки с завода</th>
                                    <th>Грузополучатель (конечный потребитель)</th>
                                    <th>Адрес поставки (эксплуатации)</th>
                                    <th>Комплектация (доп. опции)</th>
                                    <th>Сервисная компания</th>
                                    <th>Клиент</th>
                                </tr>
                                </thead>
                                <tbody><tr>
                                    <td>{MachineItem.NumSupContract}</td>
                                    <td>{MachineItem.dateShipmentFactory}</td>
                                    <td>{MachineItem.consignee}</td>
                                    <td>{MachineItem.addressOperation}</td>
                                    <td>{MachineItem.equipment}</td>
                                    <td>{serCom_i}</td>
                                    <td>{nUsr_i}</td>
                                </tr></tbody>
                            </Table>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header  >
                        <h5 id='accor-body'>Информация о техническом обслуживании</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div id='but-muchitem1'>
                            <Button variant="outline-secondary" onClick={() => setShowM(true)}>
                                Добавить ТО</Button>
                            <Modal
                                show={showM}
                                onHide={() => setShowM(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                                fullscreen={true}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        Добавить информацию о техническом обслуживании
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="table2">
                                        <Table striped bordered hover className={"table22"} size="sm">
                                            <thead>
                                            <tr>
                                                <th>Вид технического обслуживания</th>
                                                <th>Дата проведения технического обслуживания</th>
                                                <th>Наработка, м/ час</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <td>
                                                <Form.Select aria-label="" size="sm"
                                                             onChange={(event) =>setTypMainID(event.target.value)}>
                                                    <option defaultValue='' hidden>
                                                        Выберите...
                                                    </option>
                                                    {typMains && typMains.map((i) => {
                                                        return <option key={i.id} value={i.id}>{i.title}</option>;
                                                    })});
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="date"
                                                              onChange={e => setDateMan(e.target.value)}/>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="number"
                                                              onChange={e => setOpTime(e.target.value)}/>
                                            </td>
                                            </tbody>
                                        </Table>
                                        <Table striped bordered hover className={"table22"} size="sm">
                                            <thead>
                                            <tr>
                                                <th>Номер заказ-наряда</th>
                                                <th>Дата заказа-наряда</th>
                                                <th>Организация, проводившая техническое обслуживание: сотрудник</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <td>
                                                <Form.Control size="sm" type="text"
                                                              onChange={e => setWorOr(e.target.value)}/>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="date"
                                                              onChange={e => setDateWor(e.target.value)}/>
                                            </td>
                                            <td>
                                                <Form.Select aria-label="" size="sm"
                                                             onChange={(event) =>setSerComId(event.target.value)}>
                                                    <option defaultValue='' hidden>
                                                        Выберите...
                                                    </option>
                                                    {serCom && serCom.map((i) => {
                                                        return <option key={i.id} value={i.id}>{i.title}</option>;
                                                    })});
                                                </Form.Select>
                                            </td>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id='button'>
                                        <Button variant="outline-secondary" onClick={saveMan}>
                                            Сохранить
                                        </Button>
                                        <Button variant="outline-secondary" onClick={handleClose}>
                                            Отменить
                                        </Button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="table1">
                            <Table striped bordered hover className={"table12"} size="sm">
                                <thead>
                                <tr>
                                    <th>№ п/п</th>
                                    <th>Вид технического обслуживания</th>
                                    <th>Дата проведения технического обслуживания</th>
                                    <th>Наработка, м/ час</th>
                                    <th>Номер заказ-наряда</th>
                                    <th>Дата заказа-наряда</th>
                                    <th>Организация, проводившая техническое обслуживание: сотрудник</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {maintenances && maintenances.map(maintenance =>
                                {return <MaintenanceItem key={maintenance.id} {...maintenance} />;})}
                                </tbody>
                            </Table>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header  >
                        <h5 id='accor-body'>Рекламации</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div id='but-muchitem2'>
                        {catUser !== 'CL' &&
                            <Button variant="outline-secondary" onClick={() => setShowC(true)}>
                                Добавить рекламацию
                            </Button>
                            }
                            <Modal
                                show={showC}
                                onHide={() => setShowC(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                                fullscreen={true}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        Добавить рекламацию
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="table2">
                                        <Table striped bordered hover className={"table22"} size="sm">
                                            <thead>
                                            <tr>
                                                <th>Дата отказа</th>
                                                <th>Наработка, м/час</th>
                                                <th>Характер (узел) отказа</th>
                                                <th>Описание отказа</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <td>
                                                <Form.Control size="sm" type="date"
                                                              onChange={e => setDateRej(e.target.value)}/>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="number"
                                                              onChange={e => setOpTimeC(e.target.value)}/>
                                            </td>
                                            <td>
                                                <Form.Select aria-label="" size="sm"
                                                             onChange={(event) =>setTypFailID(event.target.value)}>
                                                    <option defaultValue='' hidden>
                                                        Выберите...
                                                    </option>
                                                    {typFails && typFails.map((i) => {
                                                        return <option key={i.id} value={i.id}>{i.title}</option>;
                                                    })});
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="text"
                                                              onChange={e => setFiDesc(e.target.value)}/>
                                            </td>
                                            </tbody>
                                        </Table>
                                        <Table striped bordered hover className={"table22"} size="sm">
                                            <thead>
                                            <tr>
                                                <th>Способ восстановления</th>
                                                <th>Используемые запасные части</th>
                                                <th>Дата восстановления</th>
                                                <th>Организация, проводившая техническое обслуживание: сотрудник</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <td>
                                                <Form.Select aria-label="" size="sm"
                                                             onChange={(event) =>setRecMetID(event.target.value)}>
                                                    <option defaultValue='' hidden>
                                                        Выберите...
                                                    </option>
                                                    {recMets && recMets.map((i) => {
                                                        return <option key={i.id} value={i.id}>{i.title}</option>;
                                                    })});
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="text"
                                                              onChange={e => setSpPart(e.target.value)}/>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="date"
                                                              onChange={e => setDateRec(e.target.value)}/>
                                            </td>
                                            <td>
                                                <Form.Select aria-label="" size="sm"
                                                             onChange={(event) =>setSerComId(event.target.value)}>
                                                    <option defaultValue='' hidden>
                                                        Выберите...
                                                    </option>
                                                    {serCom && serCom.map((i) => {
                                                        return <option key={i.id} value={i.id}>{i.title}</option>;
                                                    })});
                                                </Form.Select>
                                            </td>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id='button'>
                                        <Button variant="outline-secondary" onClick={saveCla}>
                                            Сохранить
                                        </Button>
                                        <Button variant="outline-secondary" onClick={() => setShowC(false)}>
                                            Отменить
                                        </Button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="table1">
                            <Table striped bordered hover className={"table12"} size="sm">
                                <thead>
                                <tr>
                                    <th>№ п/п</th>
                                    <th>Дата отказа</th>
                                    <th>Наработка, м/час</th>
                                    <th>Характер (узел) отказа</th>
                                    <th>Описание отказа</th>
                                    <th>Способ восстановления</th>
                                    <th>Используемые запасные части</th>
                                    <th>Дата восстановления</th>
                                    <th>Время простоя техники, дней</th>
                                    <th>Организация, проводившая техническое обслуживание: сотрудник</th>
                                    {catUser !== 'CL' &&
                                        <th></th>
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {claims && claims.map(claim =>
                                {return <ClaimItem key={claim.id} {...claim}/>;})}
                                </tbody>
                            </Table>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>

    );
}

export default MachineItem;