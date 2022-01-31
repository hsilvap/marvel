import * as React from 'react'
import * as Yup from 'yup';
import axios from 'axios'
import { useFormik } from 'formik';
import { StyledError, StyledNewComment } from './NewComment.styled';
export const NewComment = ({ characterId, reloadPosts }) => {
    const formik = useFormik({
        initialValues: {
            author: '',
            post: '',
        },
        validationSchema: Yup.object({
            author: Yup.string()
                .min(5, 'Must be 5 characters or less')
                .required('Required'),
            post: Yup.string()
                .min(20, 'Must be 20 characters or more')
                .required('Required')
        }),
        onSubmit: (values, actions) => {
            axios.post('http://localhost:3001/v1/characters', { characterId, ...values }).then(() => {
                actions.resetForm()
                reloadPosts()
            })
        },
    });
    return (
        <StyledNewComment onSubmit={formik.handleSubmit}>
            <input
                id="author"
                name="author"
                type="text"
                placeholder='Your Name'
                onChange={formik.handleChange}
                value={formik.values.author}
            />
            {formik.touched.author && formik.errors.author ? (
                <StyledError>{formik.errors.author}</StyledError>
            ) : null}
            <textarea
                id="post"
                name="post"
                type="post"
                placeholder='Type your comment here'
                onChange={formik.handleChange}
                value={formik.values.post}
            />
            {formik.touched.post && formik.errors.post ? (
                <StyledError>{formik.errors.post}</StyledError>
            ) : null}
            <button type="submit">Submit</button>
        </StyledNewComment>)
}