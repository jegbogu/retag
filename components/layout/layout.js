import Footer from "./footer";
import MainNavigation from "./mainNavigation";

const { Fragment } = require("react");

function Layout(props) {
    return (
        <Fragment>
            <MainNavigation />
            <main>
                {props.children}
            </main>

            <Footer />
        </Fragment>
    )
}

export default Layout