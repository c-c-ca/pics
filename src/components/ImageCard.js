import React from 'react';

const ROW_HEIGHT = 10;

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / ROW_HEIGHT);
        this.setState({ spans });
    };

    render() {
        const { url, description } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img src={url} alt={description} ref={this.imageRef} />
            </div>
        );
    }
}

export default ImageCard;
