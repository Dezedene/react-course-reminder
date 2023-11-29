import MainNavigation from './MainNavigation'

import LayoutStyle from './Layout.module.css'

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={ LayoutStyle.main }>
          { props.children }
      </main>
    </div>
  )
}

export default Layout