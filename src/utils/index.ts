type props<T extends any[]> = {
  callback: (...args: T) => void
  delay: number
}
export const Debounce = <T extends any[]>({ callback, delay }: props<T>) => {
  let timerId: number | null = null
  return (...args: T) => {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => callback(...args), delay) as unknown as number
  }
}
type GetTemplateArea = {
  columns: number
  countCards: number
}
export function getTemplateArea({ columns, countCards }: GetTemplateArea) {
  const templateArea: string[] = []
  let pushRowItem = 0
  let shouldJumpNextCol = false
  let rowsPerItem = 3
  type SetRowColumns = { initialItem: number; i: number }

  const setTripleRowColumns = ({ initialItem, i }: SetRowColumns) => {
    let values = null
    const firstCol = initialItem - 1
    const colToPushDown = initialItem + 1
    //menu
    if (firstCol === 0 && i === 0) {
      pushRowItem = colToPushDown
      values = `"item${initialItem} menu item${initialItem + 2}"`
    } else if (i === 0) {
      values = `"item${initialItem} item${pushRowItem} item${initialItem + 2}"`
      if (shouldJumpNextCol) {
        values = `"item${initialItem} item${pushRowItem} item${initialItem + 1}"`
      }
      pushRowItem = colToPushDown
    }
    if (shouldJumpNextCol && i !== 0) {
      values = `"item${initialItem} . item${pushRowItem}"`
    }
    return values
  }
  const setDoubleRowColumns = ({ initialItem, i }: SetRowColumns) => {
    let values = null
    const firstCol = initialItem - 1
    const colToPushDown = initialItem + 1
    if (firstCol === 0 && i === 0) {
      //first col & item
      pushRowItem = colToPushDown
      values = `"menu item${initialItem + 1}"`
    } else if (i === 0) {
      values = `"item${firstCol - 1} item${pushRowItem + 2} "`
      if (shouldJumpNextCol) {
        values = `"item${firstCol - 1} footer"`
      }
      pushRowItem = colToPushDown
    }
    return values
  }
  const setBlockRowsColumns = (initialItem: number, isDouble: boolean) => {
    let rowValue = ''

    if (isDouble) {
      rowValue = `"item${initialItem} item${initialItem + 1}"`
      if (initialItem + 1 > countCards) {
        rowValue = `"item${initialItem} ."`
      }
    } else {
      rowValue = `"item${initialItem} item${initialItem + 1} item${initialItem + 2}"`
    }

    for (let i = 0; i < rowsPerItem; i++) {
      let values = rowValue
      let itmValue = null
      if (isDouble) {
        itmValue = setDoubleRowColumns({ initialItem, i })
      } else {
        itmValue = setTripleRowColumns({ initialItem, i })
      }
      values = itmValue ?? values

      templateArea.push(values)
    }
  }
  const setlastItemyFooter = ({ col }: { col: number }) => {
    const isDouble = col === 2
    if (templateArea.length > 0) {
      if (shouldJumpNextCol) {
        const templateCount = templateArea.length - 2
        if (isDouble) {
          templateArea.push(`"item${pushRowItem - 1} ."`)
        } else {
          templateArea[templateCount] = templateArea[templateCount].replace('.', 'footer')
        }
      } else {
        if (isDouble) {
          templateArea.push(`"item${pushRowItem - 1} footer"`)
        } else {
          templateArea.push(`". item${pushRowItem} ."`)
          templateArea.push('". footer ."')
        }
      }
    }
  }
  type SetAreaRows = {
    col: number
  }
  const setAreaRows = ({ col }: SetAreaRows) => {
    const isDouble = col === 2
    const rows = Math.ceil(countCards / col)
    const grid = rows * col

    let initialItem = 1
    //define rows
    for (let i = 0; i < rows; i++) {
      //balance item position
      const hasLastItmInMidCol = grid - 1 === countCards
      let isLastItmInMidCol = initialItem + 1 === countCards
      if (isDouble) isLastItmInMidCol = initialItem === countCards
      if (hasLastItmInMidCol && isLastItmInMidCol) {
        shouldJumpNextCol = true
      }
      setBlockRowsColumns(initialItem, isDouble)
      initialItem += col
    }
    setlastItemyFooter({ col })
  }
  setAreaRows({ col: columns })
  const rows = templateArea.length
  const TGridArea = templateArea.join('\n')
  return [rows, TGridArea]
}
