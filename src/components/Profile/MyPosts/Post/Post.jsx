import classes from './Post.module.css'

const Post = () => {
    return (

        <div className={classes.item}>
            <img src='https://i.ndtvimg.com/i/2017-03/rowan-atkinson_640x480_71490079191.jpg' />
            post
            <div>
                <span>Like</span>
                <span>Share</span>
            </div>
        </div>
    );
}

export default Post;