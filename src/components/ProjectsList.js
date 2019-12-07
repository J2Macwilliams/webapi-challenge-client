import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Paper, Grid, Container, Card, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 5,
        background: '#111d5e'
    },
    card: {
        margin: 10,
        padding: 10,
        background: '#b21f66',
        color: ''
    },
    typography: {
        color: '#ffbd69'
    }
}));

function ProjectsList() {
    const [projects, setProjects] = useState([])
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://sprendpoint1.herokuapp.com/api/projects/')
            .then(res => {
                console.log(res)
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <div>
            <Container className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography style={{color: '#fe346e'}} variant="h3">Projects</Typography>
                </Paper>
                <Grid container spacing={1}>
                    {projects.map((emily , id) => (
                        <Grid item key={id} xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <Typography className={classes.typography} variant="h3">
                                    {emily.name}
                                </Typography>
                                <Typography className={classes.typography} variant="h4">
                                    {emily.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default ProjectsList
