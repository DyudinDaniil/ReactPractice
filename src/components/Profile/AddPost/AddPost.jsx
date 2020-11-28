import React from 'react';
import profile from './AddPost.module.css';

const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let contentPost = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: contentPost };
        props.dispatch(action);
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