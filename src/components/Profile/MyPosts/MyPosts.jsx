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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    );
}

export default MyPosts;