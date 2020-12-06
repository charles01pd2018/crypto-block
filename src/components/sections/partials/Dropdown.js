import React from 'react';

// elements
import Button from '../../../components/elements/Button';
import ButtonGroup from '../../../components/elements/ButtonGroup';


const Dropdown = () => {
    return (
        <>
            <p className='center-content text-color-primary'><b>Dropdown Menu</b></p>

            <ButtonGroup>

                <Button wide tag="a" color="secondary" >
                    <p>Promotions</p>
                </Button>

                <Button wide tag="a" color="primary" >
                    <p>Security</p>
                </Button>

            </ButtonGroup>
        </>
    )
}

export default Dropdown;