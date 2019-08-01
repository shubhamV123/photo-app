const getUrl = () => {
    let url;

    if (process.env.NODE_ENV === 'development') {
        url = 'http://localhost:5000/upload'
    }

    if (process.env.NODE_ENV === 'production') {
        url = 'https://calm-gorge-78324.herokuapp.com/upload'
    }

    return url;
}

export default getUrl;