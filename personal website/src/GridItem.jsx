function GridItem(props) {
    return (
        <div className='grid-item'>
            <img className="grid-item-logo" src={props.logoSrc} alt={props.alt}></img>
            <h3>{props.name}</h3>
        </div>
    )
}

export default GridItem