import React, { Component } from 'react';
import Search from '../../components/Search';
import Results from '../../components/Results';
import API from '../../utils/API';


class Home extends Component {
    state = {
        query: "",
        startYear: "",
        endYear: "",
        articles: [],
        results: []
    };

    // getSavedArticles = () => {
    //     API.getSavedArticles()
    //     .then(res =>
    //       this.setState({ articles: res.data})
    //     )
    //     .catch(err => console.log(err));
    // };

    handleInputChange = e => {
        // e.preventDefault();

        const { name, value } = e.target;
        this.setState({
        [name]: value
        });
        console.log(this.state)
    }

    handleFormSubmit = e => {
        e.preventDefault();
        console.log("clicked working");
        console.log(this.state)
        API.getResults(this.state.query, this.state.startYear, this.state.endYear)
            .then((res) => {
                // console.log(res)
                this.setState({ results: res.data.response.docs });
                console.log("this.state.results: ", this.state.results);
            });

    };

    render() {
        return (
            <div>
                <Search 
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                query={this.query}
                endYear={this.end}
                startYear={this.start}
                />
                <Results>
                    {this.state.results.map(article => {
                        return (
                            <li
                                id={article._id}
                                key={article._id}
                                title={article.headline.main}
                                date={article.pub_date}
                                url={article.web_url}
                            >
                                {article.headline.main}<br />
                                <a href={article.web_url} >
                                    Read More
                                </a><br />
                                <button
                                id={article._id}
                                >
                                Save Article</button>
                                <br /><br />
                            </li>
                        );
                    })}
                </Results>
            </div>
        );
    }
}

export default Home;