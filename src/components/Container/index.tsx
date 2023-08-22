import Navigation from '../Header'

interface Props {
    children: any;
    onSearchClick: any;
    onSearchChange: any;
}

const Container = (props: Props) => {
    const { children, onSearchClick, onSearchChange } = props;
    return (
        <div className="main">
            <Navigation
                onSearchClick={onSearchClick}
                onSearchChange={onSearchChange}
            >
                {children}
            </Navigation>
        </div>
    )
}

export default Container