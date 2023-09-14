import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleted }) => {
  return (
    <div className="view" >
      <input
        type="checkbox"
        className='toggle'
        checked={completed}
        onChange={() => {}}
        onClick={() => { onCompleted({ id, completed }) }}
      />
      <label>{title}</label>
      <button className={'destroy'} onClick={() => { onRemoveTodo({ id }) } } />
    </div>
  )
}
