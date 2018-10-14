import axios from 'axios';

export default {
    //Retrieves articles from NYT
    getResults: function (query, start, end) {
        // console.log('====',query, start, end);
        const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
        const APIKEY = "66d081f6c6cd4335962984b9e07f57d1";
        return axios.get(`${URL}${APIKEY}&q=${query}&begin_date=${start}0101&end_date=${end}0101`);
    },
    // Saves an article to the database
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData)
    },
    // Retrieves saved articles from the db
    getSavedArticles: function() {
        return axios.get("/api/articles");
    }
    // // Deletes an article from the db
    // deleteArticle: function (id) {
    //     return axios.delete(`/api/saved/${id}`);
    // }
};


