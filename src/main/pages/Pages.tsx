import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Login} from "../../features/a2-login/Login";
import { Profile } from '../a1-ui/profile/Profile';
import {Errors} from "../a1-ui/common/Error/Error";
import {RestorePassword} from "../../features/a3-password/password/RestorePassword";
import { NewPassword } from '../../features/a3-password/password/NewPassword';

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registry' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/*' element={<Errors/>}/>
                <Route path='/restore' element={<RestorePassword/>}/>
                <Route path='/newPassword' element={<NewPassword/>}/>
            </Routes>
            {/*<Route path='/app' element={<App/>}/>*/}

        </div>
    );
};

