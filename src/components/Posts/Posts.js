import React, { Component } from 'react';

class GetPosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []        
        };
    }

    componentDidMount() {
        fetch("https://workers-api.evansoskin.workers.dev/posts")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol>
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p>{post.title} by {post.username}</p>
                                    <p>{post.content}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }    
    }
}

export default GetPosts;