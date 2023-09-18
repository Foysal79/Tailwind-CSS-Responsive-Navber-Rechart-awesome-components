
const Link = ({route}) => {
    return (
        <ul className="mr-10 md:mr-4 md:w-6/12 md:mx-auto hover:bg-yellow-600 mx-4 my-4">
            <li><a href={route.path}>{route.name}</a></li>
        </ul>
    );
};

export default Link;