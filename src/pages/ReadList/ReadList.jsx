import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';

const ReadList = () => {

    const data = useLoaderData();
    useEffect(() =>{
        const storedBookData = getStoredBook();
        console.log(storedBookData)
    },[])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read</h2>
                </TabPanel>
                <TabPanel>
                    <h2>I Wish to Read</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ReadList;