import '@mantine/core/styles.css';

import { Route, Routes } from 'react-router'
import { Landing, Login } from './pages'
import { MantineProvider } from '@mantine/core'

export function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MantineProvider>
  )
}
