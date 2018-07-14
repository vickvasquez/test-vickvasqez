import React, { PureComponent } from 'react'

const Option = ({ text, value}) => (
    <div data-value={value}>
        {text}
    </div>
)

const OptionSelect = options => (
    <ul className="select-options">
        {
            options.map(() => (
                <li>item</li>
            ))
        }
    </ul>
)

class Select extends PureComponent {
    constructor(props) {
        super(props)
        this.refSelect = React.createRef()
        this.state = {
            numberOptions: 0,
        }
    }

    componentDidMount() {
        const select = this.refSelect.current
        const numberOptions = select.options.length

        this.setState(() => ({
            numberOptions,
        }))
    }

    handleChange = () => {

    }

    render() {
        const { children } = this.props
        return (
            <div className="select">
                <Select className="select-hidden" ref={this.refSelect}>
                    {children}
                </Select>
                <div className="select-styled">
                    <OptionSelect options={this.state.numberOptions} />
                </div>
            </div>
        )
    }
}

Select.Option = Option

export default Select
