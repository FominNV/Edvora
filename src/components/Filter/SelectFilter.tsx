import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import styles from '../../styles/components/Filter/SelectFilter.module.scss'

interface ISelectFilterProps {
  defaultValue: string
  options: string[] | null
  setFilter: Dispatch<SetStateAction<string>>
  setSecondFilter?: Dispatch<SetStateAction<string>>
}

const SelectFilter: FC<ISelectFilterProps> = ({
  options,
  defaultValue,
  setFilter,
  setSecondFilter,
}) => {
  // create option elements
  const showOptions = (options: string[]) => {
    const result = options.map((elem: string, i: number) => (
      <option value={elem} key={i}>
        {elem}
      </option>
    ))
    return result
  }

  // set current filter value
  const onclickHandler = (e: React.MouseEvent<HTMLSelectElement>) => {
    if (setSecondFilter) {
      setSecondFilter('')
    }
    setFilter(e.currentTarget.value)
  }

  // re-render options
  useEffect(() => {
    if (options) {
      showOptions(options)
    }
  }, [options])

  return (
    <div className={styles.SelectFilter}>
      <select
        className={styles.SelectFilter__select}
        defaultValue={defaultValue}
        onClick={onclickHandler}
      >
        <option value={''}>{defaultValue}</option>
        {options && showOptions(options)}
      </select>
    </div>
  )
}

export default SelectFilter
