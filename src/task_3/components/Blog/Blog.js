import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Card from '../Card/Card'
import CommentList from '../CommentList/CommentList'

const Blog = () => {
    return (
        <Grid className="blog">
            <Grid.Column width={9}>
                <CommentList />
            </Grid.Column>
            <Grid.Column width={6}>
                <Card />
            </Grid.Column>
        </Grid>
    )
}

export default Blog