"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from "./_components/TemplateListSection";


const page = () => {

    const [userSearchInput, setUserSearchInput] = useState("");
    return (
        <div >
            <SearchSection setUserSearchInput={setUserSearchInput} />
            <TemplateListSection userSearchInput={userSearchInput} />
        </div>
    )
}

export default page