import { useParams } from 'react-router';
import CallApi from '../../utils/CallApi';


function Profile () {
  const { userId } = useParams();


  if(userId !== undefined){
    return (
      <div>
        <CallApi valueId={userId} />
      </div>
    );
  }


}

export default Profile;