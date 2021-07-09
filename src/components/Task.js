import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle }) => {
    return (
        <div className={task.reminder ? 'task reminder' : 'task'} onDoubleClick={() => onToggle(task.id) } title={task.reminder ? 'Thông báo' : 'Không thông báo'} >
            <h3>{task.name} <FaTimes title="Xóa công việc" style={{color: 'red', cursor: 'pointer'}}  onClick={() => onDelete(task.id)} /> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
