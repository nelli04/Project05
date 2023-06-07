import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Login} from "../../features/a2-login/Login";
import {Profile} from '../a1-ui/a3-profile/Profile';
import {Errors} from "../a1-ui/a2-common/a11-Error/Error";
import {RestorePassword} from "../../features/a3-password/password/RestorePassword";
import {NewPassword} from '../../features/a3-password/password/NewPassword';
import {Main} from "../Main";

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registry' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/*' element={<Errors/>}/>
                <Route path='/' element={<Main/>}/>
                <Route path='/restore' element={<RestorePassword/>}/>
                <Route path='/newPassword' element={<NewPassword/>}/>
            </Routes>
        </div>
    );
};

