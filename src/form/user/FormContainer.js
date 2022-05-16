import React, {Component} from 'react'
import FromComponent from "./FormComponent";

class FormContainer extends Component {

    initUserState() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            description: "",
            isFriendly: true,
            gender: "",
            favoriteColor: "",
            dietaryRestriction: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
    }

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            description: "",
            isFriendly: true,
            gender: "",
            favoriteColor: "",
            dietaryRestriction: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            },
            favoriteSport: {
                football: false,
                volleyball: false,
                basketball: false
            }
        }
        this.handleInputOnChange = this.handleInputOnChange.bind(this)
        this.handleResetForm = this.handleResetForm.bind(this)
        this.handleCheckBoxInputOnChange = this.handleCheckBoxInputOnChange.bind(this)
    }

    componentDidMount() {
        console.log("this is random: " + Math.floor(Math.random() * 100))
    }

    handleCheckBoxInputOnChange(event) {
        const {name, checked} = event.target
        switch (name) {
            case "isVegan":
            case "isKosher":
            case "isLactoseFree":
                this.setState(prevState => {
                    return (
                        {
                            dietaryRestriction: {
                                ...prevState.dietaryRestriction,
                                [name]: checked
                            }
                        }
                    )
                })
                break;

            case "football":
            case "volleyball":
            case "basketball":
                this.setState(prevState => {
                    return (
                        {
                            favoriteSport: {
                                ...prevState.favoriteSport,
                                [name]: checked
                            }
                        }
                    )
                })
                break;

            default:
                break;

        }
    }

    handleInputOnChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox"
            ?
            this.setState(prevState => {
                return (
                    {
                        [name]: checked
                    }
                )
            })
            :
            this.setState({[name]: value})

    }


    handleResetForm() {
        console.log("handleReset")
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            description: "",
            isFriendly: true,
            gender: "",
            favoriteColor: "",
            dietaryRestriction: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        })
    }


    render() {
        return (
            // <FromComponent handleInputChange={this.handleInputOnChange} data={this.state}/>
            //should think of wrap of all form in user object
            // <FromComponent handleInputOnChange={this.handleInputOnChange} user={this.state.user}/>
            <FromComponent handleInputOnChange={this.handleInputOnChange}
                           {...this.state}
                           handleResetForm={this.handleResetForm}
                           handleCheckBoxInputOnChange={this.handleCheckBoxInputOnChange}

            />
        )
    }
}

export default FormContainer