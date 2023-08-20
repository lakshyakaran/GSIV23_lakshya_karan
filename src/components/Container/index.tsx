import Navigation from '../Header'

interface Props {
    children: any;
}

const Container = (props: Props) => {
    const { children } = props;
    return (
        <div className="main">
            <Navigation
                onSearchClick={null}
                onSearchChange={null}
            >
                {children}
            </Navigation>
        </div>
    )
}

export default Container