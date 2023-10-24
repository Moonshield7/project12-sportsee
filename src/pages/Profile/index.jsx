import { useParams } from "react-router";
import CallApi from '../../utils/CallApi'


function Profile () {
  // const { idUser } = useParams();

  return (
    <div>
      <CallApi userID={12} />
    </div>
  )

}

export default Profile;