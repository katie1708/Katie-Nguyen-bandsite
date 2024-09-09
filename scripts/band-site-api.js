//one-time apiKey
export const myApiKey = "7848050b-8b05-4530-b826-ad78cff1d7b5";

// {
//     "api_key": "7848050b-8b05-4530-b826-ad78cff1d7b5"
// }

//Create BandSiteApi class

export class BandSiteApi {
    constructor(apiKey) {
         this.apiKey = apiKey;
         this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment(comment) {
        try {
            const commentEndpoint = `${this.baseURL}comments?api_key=${this.apiKey}`;
            const apiHeader = {
                "Content-Type": "application/json"
            };
            const newComment = await axios.post(commentEndpoint, comment, apiHeader);
            // console.log(newComment);
        }
        catch (error) {
            console.error(error); 
        }
    }

    async getComments() {
        try {
            const commentEndpoint = `${this.baseURL}comments?api_key=${this.apiKey}`
            const commentsRes = await axios.get(commentEndpoint);
            const comments = commentsRes.data;
            return comments;
        }
        catch (error) {
            console.error(error); 
        }
    }

    async getShows() {
        try {
            const showsEndpoint = `${this.baseURL}showdates?api_key=${this.apiKey}`
            const showsRes = await axios.get(showsEndpoint);
            const shows = showsRes.data;
            return shows;
        }
        catch (error) {
            console.error(error); 
        }
    }
}

