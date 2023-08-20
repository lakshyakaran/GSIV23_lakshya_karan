import Navigation from '../Header'

interface Props {
    children: any;
}

const Conatiner = (props: Props) => {
    const { children } = props;
    return (
        <div className="main">
            <Navigation
                onHomeClick={null}
                onSearchClick={null}
                onSearchChange={null}
            >
                {children}
            </Navigation>
        </div>
    )
}

export default Conatiner