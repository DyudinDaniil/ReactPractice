import React from 'react';
import profile from './AddPost.module.css';

const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let contentPost = newPostElement.current.value;
        props.addPost(contentPost);
        newPostElement.current.value = ' ';
    }

    return (
        <div className={profile.content}>
            <div className={profile.add}>
                <a onClick={addPost} href="#" className={profile.add__link}>POST:</a>
                <div className={profile.add__text}>
                    <textarea ref={newPostElement}></textarea>
                </div>
            </div>
        </div>
    );
}

export default AddPost;