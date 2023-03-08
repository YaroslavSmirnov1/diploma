import React, {useEffect, useState} from "react";
import {
    ApiError,
    Claim,
    ClaimService, RecoveryMethod, RecoverymethodService,
    ServiceCompany,
    ServicecompanyService, TypeFailure, TypefailureService,
} from "../api";
import Table from "react-bootstrap/Table";
import "../styles/MachineListPrivate.css";
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";


function ClaimItem(props:Claim,  ) {

    return (
        <tr className={"claim"}>
            <td>{props.id}</td>
            <td>{props.machine_title}</td>
            <td>{props.dateRejection}</td>
            <td>{props.operTime}</td>
            <td>
                <Link to="/refbook" state={{title: props.typefailure_title,
                    description: props.typefailure_description}}>
                    {props.typefailure_title}
                </Link>
            </td>
            <td>{props.failDescription}</td>
            <td>
                <Link to="/refbook" state={{title: props.recmethode_title,
                    description: props.recmethode_description}}>
                    {props.recmethode_title}
                </Link>
            </td>
            <td>{props.spareParts}</td>
            <td>{props.dateRecovery}</td>
            <td>{props.downtime}</td>
            <td>{props.service_company}</td>
        </tr>
    );

}

function ItemRefBook(props:any) {

    return (
        <option>{props.title} </option>
    );

}

export default function ClaimList({isLoggedIn}: any, {catUser}:any) {
    const [claims, setClaims] = useState<Claim[]>();
    // if (isLoggedIn === 'true') {}
    const loadClaim  = async () => {
        setClaims(await ClaimService.claimList())
    };
    //Первоначальная загрузка информации
    // if (isLoggedIn === 'true')
    useEffect(() => {
        loadClaim().catch((err:ApiError) => {
            console.log(JSON.stringify(err))
        });
        loadTypF();
        loadRecM();
        loadSerCom();
    }, [])

    //Загрузка справочников
    const [typF, setTypF] = useState<TypeFailure[]>();
    const [recM, setRecM] = useState<RecoveryMethod[]>();
    const [serCom, setSerCom] = useState<ServiceCompany[]>();
    const loadTypF  = async () => {
        setTypF(await TypefailureService.typefailureList())

    };
    const loadRecM  = async () => {
        setRecM(await RecoverymethodService.recoverymethodList())

    };
    const loadSerCom  = async () => {
        setSerCom(await ServicecompanyService.servicecompanyList())

    };

    //Закрузка по фильтру
    const [serNum, setSerNum] = useState('');
    const [typF_i, setTypF_i] = useState<any>();
    const [recM_i, setRecM_i] = useState<any>();
    const [serCom_i, setSerCom_i] = useState<any>();
    async function loadClaimFilter() {
        setClaims(await ClaimService.claimList(serNum, typF_i, recM_i, serCom_i));
    }

    return (
        <div>
            { isLoggedIn === 'true' &&
                <>
                    <h3>Рекламации</h3>
                    <div className="table2">
                        <Table striped bordered hover className={"table22"} size="sm">
                            <thead>
                            <tr>
                                <th>№ п/п</th>
                                <th>Модель: зав. № машины</th>
                                <th>Дата отказа</th>
                                <th>Наработка, м/час</th>
                                <th>Характер (узел) отказа</th>
                                <th>Описание отказа</th>
                                <th>Способ восстановления</th>
                                <th>Используемые запасные части</th>
                                <th>Дата восстановления</th>
                                <th>Время простоя техники, дней</th>
                                <th>Организация, проводившая техническое обслуживание: сотрудник</th>
                            </tr>
                            </thead>
                            <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <Form.Control size="sm" type="text" placeholder="Введите номер" value={serNum}
                                                  onKeyDown={event => event.key === "Enter" &&
                                                      loadClaimFilter()}
                                                  onChange={e => setSerNum(e.target.value)}/>
                                </th>
                                <th></th>
                                <th></th>
                                <th>
                                    <Form.Select aria-label="" size="sm" value={typF_i}
                                                 onKeyDown={event => event.key === "Enter" &&
                                                     loadClaimFilter()}
                                                 onChange={e => setTypF_i(e.target.value)}>
                                        <option value=''>Выберите</option>
                                        {typF && typF.map(i =>
                                        {return <ItemRefBook key={i.id} {...i}/>;})}
                                    </Form.Select>
                                </th>
                                <th></th>
                                <th>
                                    <Form.Select aria-label="" size="sm" value={recM_i}
                                                 onKeyDown={event => event.key === "Enter" &&
                                                     loadClaimFilter()}
                                                 onChange={e => setRecM_i(e.target.value)}>
                                        <option value=''>Выберите</option>
                                        {recM && recM.map(i =>
                                        {return <ItemRefBook key={i.id} {...i}/>;})}
                                    </Form.Select>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    <Form.Select aria-label="" size="sm" value={serCom_i}
                                                 onKeyDown={event => event.key === "Enter" &&
                                                     loadClaimFilter()}
                                                 onChange={e => setSerCom_i(e.target.value)}>
                                        <option value=''>Выберите</option>
                                        {serCom && serCom.map(i =>
                                        {return <ItemRefBook key={i.id} {...i}/>;})}
                                    </Form.Select>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {claims && claims.map(claim =>
                            {return <ClaimItem key={claim.id} {...claim}/>;})}
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
