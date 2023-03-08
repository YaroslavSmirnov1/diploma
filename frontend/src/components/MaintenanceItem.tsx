import React, {useEffect, useState} from "react";
import {
    ApiError, Maintenance, MaintenanceService, ServiceCompany, ServicecompanyService, TypeMaintenance,
    TypemaintenanceService
} from "../api";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function MaintenanceItem(props: Maintenance) {

    const [showMi, setShowMi] = useState(false);
    const [typMainID, setTypMainID] = useState<any>(props.type);
    const [dateMan, setDateMan] = useState(props.date);
    const [opTime, setOpTime] = useState<any>(props.operTime);
    const [worOr, setWorOr] = useState(props.workOrder);
    const [dateWor, setDateWor] = useState(props.dateWorkOrder);
    const [serComID, setSerComId] = useState<any>(props.serviceCompany);
    function Delete() {
        MaintenanceService.maintenanceDelete(props.id).then(() => {
            window.location.reload();
            }
        ).catch((err:ApiError) => {
            console.log(JSON.stringify(err));
        })
    }

    const [serComi, setSerComi] = useState<ServiceCompany[]>();
    const [typMainsi, setTypMainsi] = useState<TypeMaintenance[]>();
    const loadTypMainsi  = async () => {
        setTypMainsi(await TypemaintenanceService.typemaintenanceList());
    };
    const loadSerComi  = async () => {
        setSerComi(await ServicecompanyService.servicecompanyList());
    };

    useEffect(() => {
        loadSerComi(); loadTypMainsi();
    }, []);

    function saveMan(id:number) {
        MaintenanceService.maintenanceUpdate(
            id,
            {date: dateMan, dateWorkOrder: dateWor, machine: props.machine, operTime: opTime,
                serviceCompany: serComID, type: typMainID, workOrder: worOr}
        ).then(() => {
                setShowMi(false);}
        ).catch((err:ApiError) => {
            console.log(JSON.stringify(err))
        })
    }

    function Save() {
        if (typeof props.id == "number")
            saveMan(props.id)
    }

    return (

        <tr className={"maintenance"}>
            <td>{props.id}</td>
            <td>{props.type_title}</td>
            <td>{props.date}</td>
            <td>{props.operTime}</td>
            <td>{props.workOrder}</td>
            <td>{props.dateWorkOrder}</td>
            <td>{props.service_company}</td>
            <td>
                <Button variant="outline-secondary" size="sm" onClick={() => setShowMi(true)}>
                    Редактировать
                </Button>
                <Button variant="outline-secondary" size="sm" onClick={Delete}>Удалить</Button>
                <Modal
                    show={showMi}
                    onHide={() => setShowMi(false)}
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
                                    <Form.Select aria-label="" size="sm" value={typMainID}
                                                 onChange={(event) =>setTypMainID(event.target.value)}>
                                        <option defaultValue='' hidden>
                                            Выберите...
                                        </option>
                                        {typMainsi && typMainsi.map(i => {
                                            return <option key={i.id} value={i.id}>{i.title}</option>;
                                        })});
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Control size="sm" type="date" value={dateMan}
                                                  onChange={e => setDateMan(e.target.value)}/>
                                </td>
                                <td>
                                    <Form.Control size="sm" type="number" value={opTime}
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
                                    <Form.Control size="sm" type="text" value={worOr}
                                                  onChange={e => setWorOr(e.target.value)}/>
                                </td>
                                <td>
                                    <Form.Control size="sm" type="date" value={dateWor}
                                                  onChange={e => setDateWor(e.target.value)}/>
                                </td>
                                <td>
                                    <Form.Select aria-label="" size="sm" value={serComID}
                                                 onChange={(event) =>setSerComId(event.target.value)}>
                                        <option defaultValue='' hidden>
                                            Выберите...
                                        </option>
                                        {serComi && serComi.map(i => {
                                            return <option key={i.id} value={i.id}>{i.title}</option>;
                                        })});
                                    </Form.Select>
                                </td>
                                </tbody>
                            </Table>
                        </div>
                        <div id='button'>
                            <Button variant="outline-secondary" onClick={Save}>
                                Сохранить
                            </Button>
                            <Button variant="outline-secondary" onClick={() => setShowMi(false)}>
                                Отменить
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </td>
        </tr>
    );
}

export default MaintenanceItem;