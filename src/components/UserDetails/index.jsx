import { useNavigate } from "react-router-dom";
import './index.css';
import { RiGitRepositoryFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";

const UserDetails = ({ user }) => {
  let navigate = useNavigate();
  return (
    <div className='userdetails'>
      <div className="user">
        <div className="image">
          <img src={user.avatar_url} alt="user" />
        </div>
        <div className="user-info">
          <h2> {user.name} </h2>
          <small> {user.location}</small>

          <p>
            <RiGitRepositoryFill fontSize={22} />
            <b>{user.public_repos}</b> repositories
          </p>

        </div>
      </div>
      <BiArrowBack className="return" onClick={() => navigate(-1)} fontSize={24} />
    </div>
  )
}

export default UserDetails