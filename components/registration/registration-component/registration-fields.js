import React,{ Component } from 'React';

export default class RegistrationFields extends Component {
    render () {
        return(
                <React.View >
                    <React.Text>
                    Type something in English:
                    </React.Text>

                    <React.TextInput />

                    <React.Text  >
                    Its German equivalent is:
                    </React.Text>

                    <React.Text >
                    </React.Text>

                </React.View>
        )
    }
}