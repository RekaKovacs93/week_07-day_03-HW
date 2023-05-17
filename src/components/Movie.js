const Movie = ({name, url}) => {
    return (
        <div>
            <p><b><a href ={url}>{name}</a></b></p>
        </div>
    )
}

export default Movie