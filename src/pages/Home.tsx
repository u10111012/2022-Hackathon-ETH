import React from 'react';
import {WagmiConfig, createClient} from 'wagmi'
import {getDefaultProvider} from 'ethers'

import Profile from '../component/Profile'

const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
})

const Home = () => {
    return (
        <div>
            <div className="App">
                Home
                <WagmiConfig client={client}>
                    <Profile/>
                </WagmiConfig>

            </div>
        </div>
    );
};

export default Home;
