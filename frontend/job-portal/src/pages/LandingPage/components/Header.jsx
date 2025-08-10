import React from 'react'
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const isAuthenticated = true;
    const user = { fullname: "Alex", role: "employer" };
    const navigate = useNavigate();

    return (
        <Header>
            <div className="">
                <div className=''>
                    {/* Logo */}
                    <div className=''>
                        <div className=''>
                            <Briefcase className='' />
                        </div>
                        <span className=''>Job portal</span>
                    </div>
                    {/* Navigate Links hidden on links */}
                    <nav className="">
                        <a
                            onClick={() => navigate("find-jobs")}
                            className=''
                        >
                            Find Jobs
                        </a>
                        <a
                            onClick={() => {
                                navigate(
                                    isAuthenticated && user?.role == "employer"
                                        ? "/employer/dashboard"
                                        : "login"
                                );
                            }}
                            className=""
                        >
                            For Employers
                        </a>
                    </nav>
                    {/* Auth Buttons */}
                    <div className="">
                        {isAuthenticated ? (
                            <div className="">
                                <span className="">Welcome, {user?.fullName}</span>
                                <a
                                    href={
                                        user?.role === "employer"
                                        ? "/employer-dashboard"
                                        : "/find-jobs"
                                    }
                                    className=""
                                >
                                    Dashboard
                                </a>
                            </div>
                            ) : (
                               <>
                                    <a
                                        href="/login"
                                        className=""
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="/signup"
                                        className=""
                                    >
                                        Sign Up
                                    </a>
                               </>
                            )}
                    </div>
                </div>
            </div>
        </Header>
    );
}

export default Header;
