import React, {useEffect, useState} from "react";
import {
    ApiError,
    Maintenance,
    MaintenanceService,
    ServiceCompany,
    ServicecompanyService,
    TypeMaintenance,
    TypemaintenanceService
} from "../api";
import Table from "react-bootstrap/Table";
import "../styles/MachineListPrivate.css";
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";

function MaintenanceItem(props:Maintenance) {

    return (
        <tr className={"maintenance"}>
            <td>{props.id}</td>
            <td>{props.machine_title}</td>
            <td>
                <Link to="/refbook" state={{title: props.type_title, description: props.type_description}}>
                    {props.type_title}
                </Link>
            </td>
            <td>{props.date}</td>
            <td>{props.operTime}</td>
            <td>{props.workOrder}</td>
            <td>{props.dateWorkOrder}</td>
            <td>{props.service_company}</td>
        </tr>
    );

}

function ItemRefBook(props:any) {

    return (
        <option>{props.title} </option>
    );

}

export default function MaintenanceList({isLoggedIn}: any) {
    const [maintenances, setMaintenances] = useState<Maintenance[]>();
    // if (isLoggedIn === 'true') {}
    const loadMaintenance  = async () => {
        setMaintenances(await MaintenanceService.maintenanceList())
    };
    //Первоначальная загрузка информации
    // if (isLoggedIn === 'true')
    useEffect(() => {
        loadMaintenance().catch((err:ApiError) => {
            console.log(JSON.stringify(err))
        });
        loadTypM();
        loadSerCom();
    }, [])

    //Загрузка справочников
    const [typM, setTypM] = useState<TypeMaintenance[]>();
    const [serCom, setSerCom] = useState<ServiceCompany[]>();
    const loadTypM  = async () => {
        setTypM(await TypemaintenanceService.typemaintenanceList())

    };
    const loadSerCom  = async () => {
        setSerCom(await ServicecompanyService.servicecompanyList())

    };

    //Закрузка по фильтру
    const [serNum, setSerNum] = useState('');
    const [typM_i, setTypM_i] = useState<any>();
    const [serCom_i, setSerCom_i] = useState<any>();
    async function loadMaintenanceFilter() {
        setMaintenances(await MaintenanceService.maintenanceList(serNum, typM_i, serCom_i));
    }

    return (
        <div>
            { isLoggedIn === 'true' &&
                <>
                    <h3>Информация о техническом обслуживании техники Силант</h3>
                    <div className="table2">
                        <Table striped bordered hover className={"table22"} size="sm">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Модель: зав. № машины</th>
                                <th>Вид технического обслуживания</th>
                                <th>Дата проведения технического обслуживания</th>
                                <th>Наработка, м/ час</th>
                                <th>Номер заказ-наряда</th>
                                <th>Дата заказа-наряда</th>
                                <th>Организация, проводившая техническое обслуживание: сотрудник</th>
                            </tr>
                            </thead>
                            <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <Form.Control size="sm" type="text" placeholder="Введите номер" value={serNum}
                                                  onKeyDown={event => event.key === "Enter" &&
                                                      loadMaintenanceFilter()}
                                                  onChange={e => setSerNum(e.target.value)}/>
                                </th>
                                <th>
                                    <Form.Select aria-label="" size="sm" value={typM_i}
                                                 onKeyDown={event => event.key === "Enter" &&
                                                     loadMaintenanceFilter()}
                                                 onChange={e => setTypM_i(e.target.value)}>
                                        <option value=''>Выберите</option>
                                        {typM && typM.map(i =>
                                        {return <ItemRefBook key={i.id} {...i}/>;})}
                                    </Form.Select>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    <Form.Select aria-label="" size="sm" value={serCom_i}
                                                 onKeyDown={event => event.key === "Enter" &&
                                                     loadMaintenanceFilter()}
                                                 onChange={e => setSerCom_i(e.target.value)}>
                                        <option value=''>Выберите</option>
                                        {serCom && serCom.map(i =>
                                        {return <ItemRefBook key={i.id} {...i}/>;})}
                                    </Form.Select>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {maintenances && maintenances.map(maintenance =>
                            {return <MaintenanceItem key={maintenance.id} {...maintenance}/>;})}
                            </tbody>
                        </Table>
                    </div>
                </>
            }
            { isLoggedIn !== 'true' &&
                <h1>Вы не авторизированы!</h1>
            }
        </div>
    );
}
