import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';

class Home extends Component {
    render(){
        return (
            <div>
                <Mui.AppBar position="fixed" color="white">
                <Mui.Toolbar>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="/download.png" style={{width: 60, height: 40}}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                    <form>
                        <Mui.TextField 
                        placeholder="Search..." 
                        variant="outlined"
                        size="small"
                        style={{width: 300}}/>
                    </form>
                    <Mui.Button color="primary" style={{float: "right", marginLeft: 700, width: 100}}>Login</Mui.Button>
                    &nbsp;
                    <Mui.Button color="primary" variant="contained" style={{float: "right", width: 800, height: 40}}>Create Account</Mui.Button>
                </Mui.Toolbar>
                </Mui.AppBar>
                <br/><br/><br/><br/>
                <Mui.Container fixed>
                <Mui.Grid container spacing={0}>
                    <Mui.Grid item xs={2}>

                    </Mui.Grid>
                    <Mui.Grid item xs={7}>
                     <h3>Posts 
                    <Mui.Button style={{marginLeft: 220}}>Feed</Mui.Button>
                    <Mui.Button>Week</Mui.Button>
                    <Mui.Button>Month</Mui.Button>
                    <Mui.Button>Year</Mui.Button>
                    <Mui.Button>Infinity</Mui.Button>
                    <Mui.Button>Latest</Mui.Button> 
                    </h3>                       
                    <Mui.Card> 
                    <Mui.CardActionArea>
                        <Mui.CardMedia
                        component="img" 
                        alt="Contemplative Rubix"
                        height="300"
                        image="/devimage.jpeg"
                        title="Contemplative Rubix"
                        />
                        <Mui.CardContent>
                        <Mui.Typography gutterBottom variant="h5" component="h2">
                        10 Inspiring Ideas for Your Next Front-End Project
                        </Mui.Typography>
                        <Mui.Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Mui.Typography>
                        </Mui.CardContent>
                    </Mui.CardActionArea>
                    <Mui.CardActions>
                        <Mui.Button size="small" color="primary">
                        Share
                        </Mui.Button>
                        <Mui.Button size="small" color="primary">
                        Learn More
                        </Mui.Button>
                    </Mui.CardActions>
                    </Mui.Card>
                 </Mui.Grid>
                 <Mui.Grid item xs={3}>
                    ppppppp
                 </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
             </div>
        )
    }
}
 
export default Home;