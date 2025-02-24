import { useParams } from "react-router";

const UserDetail = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("name"));
  // const location = useLocation();
  // console.log(location);
  const { id } = useParams();
  return <div className="container-fluid fs-1 text-center">User {id}</div>;
};

export default UserDetail;
