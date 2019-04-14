import React from 'react';

import { Columns, Heading, Button } from 'react-bulma-components/full';

const pastelColours = ['#80CED7', '#F6CAC9', '#91A7D0', '#C0B7AF', '#FFEE93', '#D5C9DF', '#F2D3C6', '#C1E2A5', '#DEE2FF']


const CustomComponent = ( {href , className, children} ) => {
    
   return ( <a className={className} href={href} >
       {children}
    </a>
   )
}


const Story = ({story}) => {
   const colour = pastelColours[ (story.index + 1)%pastelColours.length ];
    return ( 
                    
                    <Columns.Column size={3}>
                        
                            <div style={{background: colour, padding: '10px', minHeight: '300px' }} >
                            <Heading size={4}>{story.title}</Heading>
                            
                            <p>
                              <Button outlined color="white" renderAs={CustomComponent} href={story.url} > Link</Button>
                            </p>
                             
                            </div>
                        
                    </Columns.Column> 
                    

            )
} 

export default Story;


