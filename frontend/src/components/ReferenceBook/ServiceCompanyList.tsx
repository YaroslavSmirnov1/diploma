import React, {useEffect, useState} from "react";
import {ApiError, ServiceCompany, ServicecompanyService} from "../../api";
import Table from "react-bootstrap/Table";
import "../../styles/ReferenceBook.css";

function ServiceCompanyItem(props:ServiceCompany) {

    return (
        <tr className={"servicecompany"}>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.name}</td>
        </tr>
    );

}

export default function ServiceCompanyList({isLoggedIn, token}:any) {
    const [servicecompanys, setServiceCompanys] = useState<ServiceCompany[]>();
    // if (isLoggedIn === 'true') {}
    const loadServiceCompany  = async () => {
        setServiceCompanys(await ServicecompanyService.servicecompanyList())

    };
    // if (isLoggedIn === 'true')
    useEffect(() => {
        loadServiceCompany().catch((err:ApiError) => {
            console.log(JSON.stringify(err))
        });
    }, [])


    return (
        <div>
            { isLoggedIn === 'true' &&
            <>
                <h3>Список сервисных компаний</h3>
                <div className="table2">
                    <Table striped bordered hover className={"table22"}>
                        <thead>
                            <tr>
                                <th>Наименование компании</th>
                                <th>Описание</th>
                                <th>Сотрудник компании (login: Имя)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {servicecompanys && servicecompanys.map(servicecompany =>
                        {return <ServiceCompanyItem key={servicecompany.id} {...servicecompany}/>;})}
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
