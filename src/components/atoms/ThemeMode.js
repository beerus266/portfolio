import { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import ReactSwitch from 'react-switch';

const ThemeMode = () => {
    const [isLight, setIsLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');

    const setDark = () => {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    const setLight = () => {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    }

    const onToggleTheme = () => {
        if (isLight) {
            setDark();
        } else {
            setLight();
        }
        setIsLight(!isLight);
        console.log(document.documentElement.getAttribute('data-theme'));
    }

    return (
        <div className='absolute right-2 top-2'>
            <ReactSwitch 
                onChange={onToggleTheme} 
                checked={!isLight}
                className=''
                offColor="#baaa80"
                onColor="#353535"
                width={80}
                height={40}
                uncheckedIcon={
                    <div className='h-full text-center'>
                        <BsFillMoonFill className='m-auto h-full w-5 text-purple-500' />
                    </div>
                }
                checkedIcon={
                    <div className='h-full text-center'>
                        <BsFillSunFill className='m-auto h-full w-6 text-yellow-300' />
                    </div>
                }
            />
        </div>
    )
}

export default ThemeMode;