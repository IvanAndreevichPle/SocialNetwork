import MyPosts from './MyPosts/MyPosts';
import './Profile.module.css';
import MyPhoto from '../../img/1.jpg'
//import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src={MyPhoto} class="img-thumbnail" alt='MyPhoto' width = "200 px"></img>
            </div>
            <div>
                Some information about myself
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;