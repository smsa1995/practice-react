import React from 'react'

function FormComponent(props) {

    return (
        <div className="todo-list">
            <form>
                <input type="text"
                       name="firstName"
                       value={props.firstName}
                       placeholder="firstname"
                       onChange={props.handleInputOnChange}

                />
                <br/>
                <input type="text"
                       name="lastName"
                       value={props.lastName}
                       placeholder="firstname"
                       onChange={props.handleInputOnChange}
                />
                <h3>{props.firstName} {props.lastName}</h3>
                <br/>
                <input type="text"
                       name="email"
                       value={props.email}
                       placeholder="email"
                       onChange={props.handleInputOnChange}
                />
                <br/>
                <h3>{props.email}</h3>
                <br/>
                <textarea name="description"
                          value={props.description}
                          onChange={props.handleInputOnChange}
                />
                <h3>{props.description}</h3>
                <br/>
                <label>
                    <input type="checkbox"
                           name="isFriendly"
                           value={props.isFriendly}
                           checked={props.isFriendly}
                           onChange={props.handleInputOnChange}
                    />is friendly?
                </label>
                <h3>Is Friendly {props.isFriendly.toString()}</h3>
                <br/>
                <label>
                    <input type="radio"
                           name="gender"
                           value="male"
                           onChange={props.handleInputOnChange}
                           checked={props.gender === "male"}
                    />male
                </label>
                <label>
                    <input type="radio"
                           name="gender"
                           value="female"
                           onChange={props.handleInputOnChange}
                           checked={props.gender === "female"}
                    />female
                </label>
                <h3>You are a {props.gender}</h3>
                <br/>
                <select
                    name="favoriteColor"
                    value={props.favoriteColor}
                    onChange={props.handleInputOnChange}
                >
                    <option value="nothing">...</option>
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Grown">Grown</option>
                    <option value="Green">Green</option>
                </select>
                <h3>Your favorite color is {props.favoriteColor}</h3>
                <br/>
                {/*dietaryRestriction*/}
                <label>
                    <input type="checkbox"
                           name="isVegan"
                           checked={props.dietaryRestriction.isVegan}
                           onChange={props.handleCheckBoxInputOnChange}
                    />Vegan?
                </label>
                <br/>
                <label>
                    <input type="checkbox"
                           name="isKosher"
                           checked={props.dietaryRestriction.isKosher}
                           onChange={props.handleCheckBoxInputOnChange}
                    />isKosher?
                </label>
                <br/>
                <label>
                    <input type="checkbox"
                           name="isLactoseFree"
                           checked={props.dietaryRestriction.isLactoseFree}
                           onChange={props.handleCheckBoxInputOnChange}
                    />isLactoseFree?
                </label>
                {/*favoriteSport*/}
                <br />
                <br />

                <label>
                    <input type="checkbox"
                           name="football"
                           checked={props.favoriteSport.football}
                           onChange={props.handleCheckBoxInputOnChange}
                    />Football
                </label>
                <br />

                <label>
                    <input type="checkbox"
                           name="volleyball"
                           checked={props.favoriteSport.volleyball}
                           onChange={props.handleCheckBoxInputOnChange}
                    />Volleyball
                </label>
                <br />

                <label>
                    <input type="checkbox"
                           name="basketball"
                           checked={props.favoriteSport.basketball}
                           onChange={props.handleCheckBoxInputOnChange}
                    />Basketball
                </label>
                <br />


                <br/>
                <input type="button" value="reset" onClick={props.handleResetForm}/>
                {/*<button>submit</button>*/}
                {/*<button onClick={props.props.handleReset}>reset</button>*/}
            </form>
        </div>
    )
}

export default FormComponent