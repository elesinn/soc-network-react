import React from 'react';
import {Field, reduxForm} from "redux-form";

const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <div {...props}><textarea {...input} {...restProps} /></div>
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"} />
            </div>
            <div>
                <button>
                    Add post
                </button>
            </div>
        </form>
    );
};

let ReduxPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddPostForm);

export default ReduxPostForm;