import React, {useEffect, useState} from "react";
import {
    ApiError, Claim, ClaimService, RecoveryMethod, RecoverymethodService, TypeFailure, TypefailureService,

} from "../api";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";


function ClaimItem(props:Claim) {
    const [showCi, setShowCi] = useState(false);
    const [dateRej, setDateRej] = useState(props.dateRejection);
    const [opTimeC, setOpTimeC] = useState<any>(props.operTime);
    const [fiDesc, setFiDesc] = useState(props.failDescription);
    const [recMetID, setRecMetID] = useState<any>(props.recMethod);
    const [spPart, setSpPart] = useState(props.spareParts);
    const [dateRec, setDateRec] = useState(props.dateRecovery);
    const [typFailID, setTypFailID] = useState<any>(props.typeFailure);
    const [catUser] = useState(localStorage.getItem('catUser'));
    function Delete() {
        ClaimService.claimDelete(props.id).then(() => {
                window.location.reload();
            }
        ).catch((err:ApiError) => {
            console.log(JSON.stringify(err));
        })
    }

    const [typFaili, setTypFaili] = useState<TypeFailure[]>();
    const [recMeti, setRecMeti] = useState<RecoveryMethod[]>();
    const loadTypFaili  = async () => {
        setTypFaili(await TypefailureService.typefailureList());
    };
    const loadRecMeti = async () => {
        setRecMeti(await RecoverymethodService.recoverymethodList());
    };
    useEffect(() => {
        loadTypFaili(); loadRecMeti();
    }, []);

    function saveClai() {
        ClaimService.claimUpdate(
            props.id, {
                dateRecovery: dateRec,
                dateRejection: dateRej,
                failDescription: fiDesc,
                machine: props.machine,
                operTime: opTimeC,
                recMethod: recMetID,
                spareParts: spPart,
                typeFailure: typFailID
            }
        ).then(() => {
            setShowCi(false);}
        ).catch((err:ApiError) => {
            console.log(JSON.stringify(err));
        })
    }

    return (
        <tr className={"claim"}>
            <td>{props.id}</td>
            <td>{props.dateRejection}</td>
            <td>{props.operTime}</td>
            <td>{props.typefailure_title}</td>
            <td>{props.failDescription}</td>
            <td>{props.recmethode_title}</td>
            <td>{props.spareParts}</td>
            <td>{props.dateRecovery}</td>
            <td>{props.downtime}</td>
            <td>{props.service_company}</td>
            {catUser !== 'CL' &&
                <td>
                    <Button variant="outline-secondary" size="sm" onClick={() => setShowCi(true)}>
                        Редактировать
                    </Button>
                    <Modal
                        show={showCi}
                        onHide={() => setShowCi(false)}
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
                                        <Form.Control size="sm" type="date" value={dateRej}
                                                      onChange={e => setDateRej(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="number" value={opTimeC}
                                                      onChange={e => setOpTimeC(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Select aria-label="" size="sm" value={typFailID}
                                                     onChange={(event) => setTypFailID(event.target.value)}>
                                            <option defaultValue='' hidden>
                                                Выберите...
                                            </option>
                                            {typFaili && typFaili.map((i) => {
                                                return <option key={i.id} value={i.id}>{i.title}</option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={fiDesc}
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
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <td>
                                        <Form.Select aria-label="" size="sm" value={recMetID}
                                                     onChange={(event) => setRecMetID(event.target.value)}>
                                            <option defaultValue='' hidden>
                                                Выберите...
                                            </option>
                                            {recMeti && recMeti.map((i) => {
                                                return <option key={i.id} value={i.id}>{i.title}</option>;
                                            })});
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="text" value={spPart}
                                                      onChange={e => setSpPart(e.target.value)}/>
                                    </td>
                                    <td>
                                        <Form.Control size="sm" type="date" value={dateRec}
                                                      onChange={e => setDateRec(e.target.value)}/>
                                    </td>
                                    </tbody>
                                </Table>
                            </div>
                            <div id='button'>
                                <Button variant="outline-secondary" onClick={saveClai}>
                                    Сохранить
                                </Button>
                                <Button variant="outline-secondary" onClick={() => setShowCi(false)}>
                                    Отменить
                                </Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                    <Button variant="outline-secondary" size="sm" onClick={Delete}>Удалить</Button>
                </td>
            }
        </tr>
    );

}

export default ClaimItem;