import React, {useState} from "react";
import "../styles/Header.css";
import logo from "../images/Logotype_1.svg";
import {Button, Modal} from "react-bootstrap";
import {ApiError, AuthService, UsgroupService} from "../api";


function Header({setIsLoggedIn, isLoggedIn, setToken, setName, setCatUser}:any) {

    const [showModal, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    function handleSave() {
        AuthService.authTokenLoginCreate({
            password: pass,
            username: login
        }).then((tok:{}) => {
            setToken(JSON.parse(JSON.stringify(tok)).auth_token);
            setIsLoggedIn('true');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('Token',JSON.parse(JSON.stringify(tok)).auth_token);
            UsgroupService.usgroupList(login).then((name) => {
                name.map((i) => ((
                        setName(i.fila_name),
                        setCatUser(i.categoryType),
                        localStorage.setItem('name', JSON.parse(JSON.stringify(i.fila_name))),
                        localStorage.setItem('catUser', JSON.parse(JSON.stringify(i.categoryType)))
                    ))
                )
            })
            return {setToken,setIsLoggedIn}
        }).catch((err:ApiError) => {
            alert('Неверный логин или пароль!')
            console.log(JSON.stringify(err));
        }).then(() => {
            setShow(false);
            // window.location.reload();
        })
    };

    function handleLogOut() {
        AuthService.authTokenLogoutCreate();
        setIsLoggedIn('false');
        localStorage.removeItem('Token');
        localStorage.removeItem('name');
        localStorage.removeItem('catUser');
        localStorage.setItem('isLoggedIn', 'false');
        window.location.reload();
    }

    return (
       <header>
           <img className="logo" src={logo} alt="логотип" />
           <h2 className="text-header">Электронная сервисная книжка "Мой Силант"</h2>
           { isLoggedIn !== 'true' &&
           <>
               <Button id="btn-head" variant="outline-light" onClick={handleShow}>
                   Войти
               </Button>
               <Modal className="modal-sm" show={showModal} onHide={handleClose}>
                   <Modal.Header closeButton>
                       <Modal.Title>Авторизация</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <form>
                           <p>Логин:</p>
                           <input type="text" value={login}
                                  onChange={e => setLogin(e.target.value)}></input>
                           <p>Пароль:</p>
                           <input type="password" value={pass}
                                  onChange={e => setPass(e.target.value)}></input>
                       </form>
                   </Modal.Body>
                   <Modal.Footer>
                       <Button variant="outline-secondary" onClick={handleSave}>
                           Войти
                       </Button>
                   </Modal.Footer>
               </Modal>
           </>
       }
           { isLoggedIn === 'true' &&
               <>
                   <Button id="btn-head" variant="outline-light" onClick={handleLogOut}>
                       Выйти
                   </Button>
               </>
           }
       </header>
    )
}

export default Header;
