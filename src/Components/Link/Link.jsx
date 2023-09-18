
const Link = ({route}) => {
    return (
        <ul className="mr-10">
            <li><a href={route.path}>{route.name}</a></li>
        </ul>
    );
};

export default Link;