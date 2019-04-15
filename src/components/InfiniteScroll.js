import React from 'react';




class InfiteScroll extends React.Component {
    

    componentDidMount() {
        
                
                const infiniteScrollOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: [0, 0.25, 0.5, 0.75, 1]
                }

                const target = document.querySelector('.loading-dots') 
                const observer = new IntersectionObserver(this.props.loadMore, infiniteScrollOptions);
                observer.observe(target);
    }

    
    render () {
        return ( <div className="loading-dots">
            <div className="loading-dots--dot"></div>
            <div className="loading-dots--dot"></div>
            <div className="loading-dots--dot"></div>
        </div>
        )

    }
}

export default InfiteScroll;