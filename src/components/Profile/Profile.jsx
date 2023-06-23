import MyPosts from './MyPosts/MyPosts';
import './Profile.module.css';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://asianways.ru/wp-content/uploads/2016/01/luchshie-plyazhi-phuketa-opisanie-otzyvy-karta-660x330.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;