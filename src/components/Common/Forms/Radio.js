import "../Radio.css"

const Radio = props => {
    const radioButtons = props.radioButtons.map(el => (
        <div className="radio-button-wrapper" key={el.id}>
            <input
                className="radio-btn"
                name={props.name}
                type="radio"
                value={el.value}
                onChange={e => props.onChange(e)}
            />
            <label htmlFor={props.name}>{el.label}</label>
        </div>
    ))

    return (
        <div className="form-component radio">
            {props.label === undefined ? null : <label>{props.label}</label>}
            {radioButtons}
        </div>
    )
}

export default Radio