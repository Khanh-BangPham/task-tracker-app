import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [name, setName] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert ('Vui lòng hoàn thành nhập một công việc')
            return
        }

        onAdd({name, day, reminder})

        setName('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Tên công việc</label>
                <input 
                    type="name" 
                    placeholder='Tên công việc'
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Thời gian - ngày và giờ </label>
                <input 
                    type="name" 
                    placeholder='Thời gian - ngày và giờ ' 
                    value={day}
                    onChange={(e) => setDay(e.target.value)} 
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Cài đặt thông báo</label>
                <input 
                    type="checkbox" 
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                />
            </div>
            <input type="submit" value='Lưu công việc' className='btn btn-block' />
        </form>
    )
}

AddTask.propTypes = {

}

export default AddTask
