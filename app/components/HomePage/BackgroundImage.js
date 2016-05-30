
import React, {PropTypes} from 'react';
/*
This component displays a placeholder image that is hosted locally
while it waits for a remote image to load.
Usage: <BackgroundImage img={source} placeholder={localImage} {...other attributes}>
{...child components}
</BackgroundImage>
*/
export default class BackgroundLoader extends React.Component {
    static get propTypes () {
        return {
            src: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            className: PropTypes.string,
            style: PropTypes.object,
            children: PropTypes.object,
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            error: false,
        };

        this.handleLoad = this.handleLoad.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
        // Making this a global so it can be later
        // nullified when the component unmounts
        this.image = new Image();
        console.log('-------------NIHAO----------------');
        console.log(`src`, this.props.src);
        console.log('----------------------------------');

        this.image.src = this.props.src;
        this.image.onload = this.handleLoad;
        this.image.onerror = this.handleError;
    }

    shouldComponentUpdate(nextState, nextProps) {
        return !this.state.loaded;
    }

    componentWillUnmount() {
        this.image = null;
    }

    handleLoad(e) {
        console.log('-------------NIHAO----------------');
        console.log(`load!!`);
        console.log('----------------------------------');
        this.setState({
            loaded: true,
        });
    }

    handleError(e) {
        console.error('Failed to load ', this.props.src);

        this.setState({
            error: true,
        });
    }

    render() {
        const {src, placeholder, children, ...props} = this.props;
        const source = !this.state.loaded || this.state.error ? placeholder : src;
        console.log('-------------NIHAO----------------');
        console.log(`source nOWWW`, source);
        console.log('----------------------------------');

        return (
            <div style={{backgroundImage: `url(${source})`}} {...props}>
            {children}
            </div>
        );
    }
}

export default BackgroundLoader;
