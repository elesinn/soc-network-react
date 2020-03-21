import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Posts from "./Posts"
import {reset} from "redux-form";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
            dispatch(reset('ProfileAddNewPostForm')) //clear form after submit
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;