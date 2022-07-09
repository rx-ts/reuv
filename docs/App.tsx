import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'

import 'github-markdown-css'
import './global.scss'

const Readme = () => {
  const { pkgName, name } = useParams<'name' | 'pkgName'>()
  const Readme = lazy(() =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    pkgName
      ? import(`../packages/@reuv/${pkgName}/README.md`)
      : name
      ? import(`../packages/${name}/README.md`)
      : import('../README.md'),
  )
  return (
    <Suspense>
      <Readme />
    </Suspense>
  )
}

const Changelog = () => {
  const Changelog = lazy(() => import('../CHANGELOG.md'))
  return (
    <Suspense>
      <Changelog />
    </Suspense>
  )
}

export const App = () => (
  <Router>
    <Routes>
      <Route
        path="/CHANGELOG.md"
        element={<Changelog />}
      />
      <Route
        path="/packages/:name"
        element={<Readme />}
      />
      <Route
        path="/packages/:name/CHANGELOG.md"
        element={<Changelog />}
      />
      <Route
        path="/"
        element={<Readme />}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      ></Route>
    </Routes>
  </Router>
)
