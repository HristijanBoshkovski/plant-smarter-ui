import { Button } from "../components/Common/Forms/Button";
import Input from "../components/Common/Forms/Input";
import Radio from "../components/Common/Forms/Radio";
import Info from "../components/Common/Info/Info";


const RegisterObjectJsx = ({
    handleSubmit,
    handleChange,
    submitHandler,
    object
}) => (
    <form onSubmit={e => e.preventDefault()}>
        <Input
            placeholder="Name of establishment"
            label="Name of establishment"
            name="name"
            type="text"
            value={object.name}
            styleClass="form-style"
            onChange={e => handleChange(e)}
        />
        <Input
            placeholder="Email of establishment"
            label="Email of establishment"
            name="email"
            type="email"
            value={object.email}
            styleClass="form-style"
            onChange={e => handleChange(e)}
        />
        <Input
            placeholder="Bio of establishment"
            label="Bio of establishment"
            name="bio_info"
            type="textarea"
            value={object.bio_info}
            styleClass="form-style"
            onChange={e => handleChange(e)}
        />
        <div className="radio-button">
            <Radio
                radioButtons={[
                    { id: 1, label: 'Business', value: 'business' },
                    { id: 2, label: 'School', value: 'school' }
                ]}
                label="Type of establishment"
                name="object_type"
                onChange={e => handleChange(e)}
                value={object.object_type}
            />
        </div>
        <label>Select profile picture</label>
        <br />
        <input type="file" name="picture" onChange={e => handleChange({target: {name: "picture", value: e.target.files[0]}})} />
        {submitHandler.submitted === false ?
            <Button onClick={e => handleSubmit(e)} value="Submit" type="Submit" styleClass="btns btns-submit"></Button> :
            <Info type={submitHandler.type} message={submitHandler.message} />}
    </form>
)

export default RegisterObjectJsx