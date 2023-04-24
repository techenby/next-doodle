class GraphQL {

    static endpoint = process.env.GRAPHQL_URL;

    static async query(query) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.GRAPHQL_TOKEN
        };

        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify({ query }),
        });

        const json = await response.json();

        if (json.errors) {
            console.log(json.errors);
            throw new Error('GraphQL query failed.');
        }

        return json.data;
    }
}

export default GraphQL;