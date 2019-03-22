import React, {Component} from 'react';
import Input from '@material-ui/core/Input';

class Header extends Component {
    render() {
        return (
            <div>
                Hello world header {this.props.myValue}
                <Input/>
            </div>
        )
    }
}

export default Header;
