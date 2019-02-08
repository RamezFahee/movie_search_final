 
import moment from 'moment';
import React, { Component, Fragment } from 'react';
import { Rating,  Card, Divider, Image, Placeholder, Grid, Header, Icon, Input, Segment } from 'semantic-ui-react'
import axios from 'axios';
 
 


class App extends Component 
{
  constructor(props){

    super(props);
    this.state = {
      isLoading: false,
      results:{},
      value:'',
      errorcode:0,
      showplaceholder:false
    };
  }
  search=(e)=>{
    e.preventDefault();
    this.setState({...this.state,isLoading:true, showplaceholder:true})
    const {value}=this.state
      if (value!=null)
   {
     // our new api url
    let uri=`http://localhost:18940/movie?name=${value}`
  //use axios to call api
  axios.get(uri)
  .then(res => {
   this.setState({...this.state,isLoading:false,results:res.data,errorcode:res.status })
         }) 
      .catch((error)=>{
        //determine the type of error we got
       let errorcode=error.toString().indexOf('404')>-1?404 : 500;
       
        this.setState({...this.state,isLoading:false,errorcode:errorcode })
       //display error msg
        alert(errorcode + '  ' +' Error')
      }) 


  
 
  
    
   }
   else{

   }
   
  }
  handleSearchChange = (e ) => {
  //used to set value in the state
    let value=e.target.value ;
 
    this.setState({...this.state, value:value})
  
  
  }
  handleRef = (c) => {
    this.inputRef = c
  }
  
  render() {
    const {isLoading,results,value,showplaceholder,errorcode}=this.state;
  
    const newrate=results.imdbRating !=null   ? (parseInt(results.imdbRating) /5) : 0;
    const Releasedyear =results.released !=null ? moment(results.released).format('YYYY') :'' ;
 
    return (
      <div className="App">
    <Segment placeholder>
         <Grid  columns={1} stackable textAlign='center'>
                 <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header icon>
              <Icon name='search' />
              Find Movie
            </Header>
            
            <form id='searchform' name='searchform' onSubmit={this.search}>
            <Input loading={isLoading} iconPosition='left' ref={this.handleRef}  action={{ icon: 'search' }} placeholder='Movie Search...' onChange={this.handleSearchChange} />
      
      </form>
    `
          </Grid.Column>
  
         
        </Grid.Row>
      </Grid>
    </Segment>
    
    <Divider />
  <Fragment>
           

         <Card.Group style={{ width:400,height:250 ,display:  showplaceholder &&  errorcode===200 ? "block" :'none'}}  doubling itemsPerRow={1} stackable>
       
            <Card key={results.imdbID} raised>
              { isLoading   ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image style={{width:400,height:250}} src={results.poster} />
              )}

              <Card.Content  >
                {isLoading  ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{results.title}</Card.Header>
                    <Card.Meta> {moment(results.released).format('MM-DD-YYYY')}</Card.Meta>
                    <Card.Meta>{results.genre}</Card.Meta>
                    <Card.Meta>{results.director}</Card.Meta>
                    <Card.Meta>{results.writer}</Card.Meta>
                    <Card.Meta> <Rating icon='star' defaultRating={newrate!=null ? newrate :0} maxRating={5} /></Card.Meta>
                            
                    <Card.Description style={{display: Releasedyear <= 2015 ? "none" :'block'}}>{results.plot}</Card.Description>
                     
                  </Fragment>
                )} 
              </Card.Content>
 
            </Card>
          ) 
        </Card.Group>  
      </Fragment>

    
      </div>
    );
  }
}

export default App;
