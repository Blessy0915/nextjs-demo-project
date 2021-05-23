import layoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={layoutStyles.container}>
            <main styles={layoutStyles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout
