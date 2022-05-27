import { useState } from "react"
import { BsCheck } from "react-icons/bs"
import Input from "./Input"

const Option = props => (
    <li className="select-option" onClick={e => props.handleChange(props.option)}>
        <span>{props.option.checked === false ? null : <BsCheck />}</span>
        <p>{props.option[props.dispKey]}</p>
    </li>
)

const Select = props => {
    const [filter, setFilter] = useState("")
    const [expanded, setExpanded] = useState(false)

    const isChecked = item => {
        if (props.type === "select") return props.value === item[props.valKey]
        if (props.type === "multipleSelect") return props.value.includes(item[props.valKey])
        return false
    }

    const getValue = item => {
        if (props.type === "select" && isChecked(item) === true) return null
        if (props.type === "select" && isChecked(item) === false) return item[props.valKey]
        if (props.type === "multipleSelect" && isChecked(item) === false) return [...props.value, item[props.valKey]]
        return props.value.filter(i => i !== item[props.valKey])
    }

    const handleChange = item => props.onChange({
        target: { name: props.name, value: getValue(item) }
    })

    const filtered_options = props.options.filter(opt => opt[props.dispKey].toLowerCase().includes(filter.toLowerCase())).map(opt => ({ ...opt, checked: isChecked(opt) }))
    const selected = props.options.filter(opt => isChecked(opt) === true)

    return (
        <div className="form-component select">
            {props.label !== undefined ? <label>{props.label}</label> : null}

            <span className="select-top" onClick={e => setExpanded(!expanded)}>
                {selected.map(opt => <p>{opt[props.dispKey]}</p>)}
            </span>

            <span className="select-bottom">
                {props.disableSearch === true ?
                    null :
                    <Input name="filter" type="text" value={filter} onChange={e => setFilter(e.target.value)} />
                }

                <ul className="select-options-container">
                    {filtered_options.map(opt => <Option handleChange={handleChange} option={opt} dispKey={props.dispKey} />)}
                </ul>
            </span>
        </div>
    )

}

export default Select
