import React, { useState } from 'react';
import map from "../../shared/assets/svg/map.svg";
import Phone from "../../shared/assets/svg/phone.svg";
import Cart from "../../shared/assets/svg/basket.svg";
import registr from "../../shared/assets/svg/register.svg";
// import SignUpModal from '../Modal/SignUpModal.jsx';
// import SignInModal from '../Modal/SignInModal.jsx';
import Container from '../../shared/Container/Container.jsx';

const HeaderTwo = () => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Санкт-Петербург');

    const openSignUpModal = () => {
        setIsSignUpOpen(true);
    };

    const openSignInModal = () => {
        setIsSignInOpen(true);
    };

    const closeModal = (modalType) => {
        if (modalType === 'signUp') {
            setIsSignUpOpen(false);
        } else if (modalType === 'signIn') {
            setIsSignInOpen(false);
        }
    };

    const switchToSignIn = () => {
        setIsSignUpOpen(false);
        setIsSignInOpen(true);
    };

    const switchToSignUp = () => {
        setIsSignInOpen(false);
        setIsSignUpOpen(true);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectCity = (city) => {
        setSelectedCity(city);
        setIsDropdownOpen(false);
    };

    return (
        <div className="bg-rose-100">
            <Container>
                <div className="flex items-center justify-around h-[48px]">
                    <nav className="flex items-center gap-3">
                        <p>Гарантия свежести</p>
                        <h1>Доставка и оплата</h1>
                        <h1>Оптовые поставки</h1>
                        <h1>Контакты</h1>
                    </nav>
                    <div className="flex items-center gap-5">
                        <nav className="flex items-center relative">
                            <img src={map} alt="" />
                            <h1 className="cursor-pointer" onClick={toggleDropdown}>
                                {selectedCity}▾
                            </h1>
                            {isDropdownOpen && (
                                <div className="absolute top-full mt-2 bg-white border rounded shadow-lg">
                                    <div className="flex flex-col">
                                        <button
                                            className="px-4 py-2 text-left hover:bg-gray-100"
                                            onClick={() => selectCity('Москва')}
                                        >
                                            Москва
                                        </button>
                                        <button
                                            className="px-4 py-2 text-left hover:bg-gray-100"
                                            onClick={() => selectCity('Новосибирск')}
                                        >
                                            Новосибирск
                                        </button>
                                        <button
                                            className="px-4 py-2 text-left hover:bg-gray-100"
                                            onClick={() => selectCity('Екатеринбург')}
                                        >
                                            Екатеринбург
                                        </button>
                                    </div>
                                </div>
                            )}
                        </nav>
                        <nav className="flex items-center">
                            <img src={Phone} alt="" />
                            <h1>8 812 309-82-88</h1>
                        </nav>
                        <nav className="flex items-center">
                            <img src={Cart} alt="" />
                            <h1>В корзине (4 товара)</h1>
                        </nav>
                        <nav className="flex items-center ml-[30px]">
                            <img
                                className="w-[35px] cursor-pointer"
                                src={registr}
                                alt="Registration Logo"
                                onClick={openSignUpModal}
                            />
                        </nav>
                    </div>
                </div>
            </Container>

            {/* <SignUpModal
                isOpen={isSignUpOpen}
                onClose={() => closeModal('signUp')}
                onSwitchToSignIn={switchToSignIn}
            />
            <SignInModal
                isOpen={isSignInOpen}
                onClose={() => closeModal('signIn')}
                onSwitchToSignUp={switchToSignUp}
            /> */}
        </div>
    );
};

export default HeaderTwo;
