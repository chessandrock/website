import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Error404 } from './../pages/Error404'
import { Home } from './../pages/Home'
import { About } from './../pages/About'
import { Blog } from './../pages/Blog'
import { Projects } from './../pages/Projects'
import { Contact } from './../pages/Contact'

export const Content = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/blog' element={<Blog />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    )
}
