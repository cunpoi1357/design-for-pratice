import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Fragment } from 'react'

import './App.css'

import { publicRoutes } from './router'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component

                    let Layout: React.FC<{
                        children: JSX.Element
                    }> = DefaultLayout

                    if (route.layout) {
                        Layout = route.layout
                    } else if (route.layout === null) {
                        Layout = Fragment
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
