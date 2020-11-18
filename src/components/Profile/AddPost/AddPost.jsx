import React from 'react';
import profile from './AddPost.module.css';

const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let contentPost = newPostElement.current.value;
        props.updateNewPostText(contentPost);
    }

    return (
        <div className={profile.content}>
            <div className={profile.add}>
                <div onClick={addPost} className={profile.add__link}>POST:</div>
                <div className={profile.add__text}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
            </div>
        </div>
    );
}

export default AddPost;