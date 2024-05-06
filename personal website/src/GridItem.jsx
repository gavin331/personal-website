function GridItem(props) {
    return (
        <div className='grid-item'>
            <img className="grid-item-logo" src={props.logoSrc} alt={props.alt}></img>
            <p>{props.name}</p>
        </div>
    )
}

export default GridItem