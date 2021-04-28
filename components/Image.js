const Image = ({src, width, isSquare}) => {
    
    return <img src={src} style={{width: width, height: isSquare ? width: "auto"}} />
}

export default Image;