import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import AllToysSection from '../../Shared/AllToysSection/AllToysSection';

const AllToys = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-8'>
                <AllToysSection></AllToysSection>
            </div>
        </div>
    );
};

export default AllToys;
