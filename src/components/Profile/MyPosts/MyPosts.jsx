import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={'posts'}>
            My posts
            <div>
               <textarea></textarea>
               <button>Add</button>
               <button>Remove</button>
            </div>
            <Post message = 'Hi! How are you?' likes_counter = '15'/>
            <Post message = 'This is my first post!' likes_counter = '30'/>
        </div>
    );
}

export default MyPosts;