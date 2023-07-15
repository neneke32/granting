import { useState, useCallback } from 'react'
/**
 * Dropdown menu
 * @param {*} id mandatory identification, often related to id of entity 
 * @param {str} value value
 * @param {(value) => void} onChange delayed callback notifying about the change
 * @param {[{str, str}]} items array of menu items, item must include name and value
 * @returns 
 */
export const GrantingDropdown = ({id, value, onChange, items}) => {
    const [localValue, setLocalValue] = useState(value)

    const localOnChange = useCallback(
        (e) => {
            const newValue = e.target.value
            setLocalValue(newValue)
            onChange(newValue)
        }, [id, onChange]
    )

    return (
        <select name={localValue} value={localValue} onChange={localOnChange}>
            {items.map((e, key) => {
            return <option key={key} value={e.value}>{e.name}</option>;
            })}
        </select>
    )
}