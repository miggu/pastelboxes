import React from 'react';
import Story from './Story';

import { Columns } from 'react-bulma-components';

const StoryPanel = ({stories}) => {

    return (
        <Columns>
        { stories.map( (story, index) => <Story key={story.id} story={{index , ...story}} />) }
        </Columns>
        
    )
}    
    


export default StoryPanel ;