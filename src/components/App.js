import React from 'react';
import StoryPanel from './StoryPanel';
import SearchBox from './SearchBox';
import InfiteScroll from './InfiniteScroll'
import { Container } from 'react-bulma-components/full';
import api from '../api';


const initialStoriesCount = 16;




class App extends React.Component {

    state = {
        bestStories : [],
        shownStories: [],
        story: [],
        searchTerm: '', 
        isLoading: false
    }

    componentDidMount = async () => {
        const response = await api.get('/beststories.json'); 
        
        const bestStories = response.data;

        const shownStories = [];
        for (let i = 0; i < initialStoriesCount ; i++ ) {
            let response = await api.get(`item/${bestStories[i]}.json`);
            shownStories.push(response.data);
        }


        

        this.setState({bestStories, shownStories});
    }


    clickHandler = (e) => {
        const searchTerm = e.target.value;
        this.setState({searchTerm});
    }


    loadMore = async () => {

        if(!this.state.isLoading) {
            this.setState({isLoading: true})
            const bestStories = this.state.bestStories;
            const index = this.state.shownStories.length  ;
            
            const shownStories = this.state.shownStories;
                for ( let i =index ; i < (index + 16) ; i++) {
                    let response = await api.get(`item/${bestStories[i]}.json`);
                    shownStories.push(response.data); 

                }
                
            this.setState({shownStories, isLoading:false});
            }

    }





    render () {
        
        const { shownStories } = this.state

        

        console.log(this.state)
        return  (
            <Container>
            <h1>Panel</h1> 
            <SearchBox clickHandler={this.clickHandler} />
            {shownStories.length ?
                    <StoryPanel stories={shownStories.filter(story => story.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} />
                    
            : null 
            }
            {shownStories.length ?
            
                 <InfiteScroll  loadMore={this.loadMore} />
                :null}
           
            </Container>
            
        )
    }
}


export default App;