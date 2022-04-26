import React, { useState } from 'react'

export default function Comment({ value, data, saveComment, parentId }) {
    const dataChild =  data.filter((val) => {
        return val.replyTo === value.id
    }) 
    const [isActive, setActive] = useState(false)
    return (
        <div style={{ marginLeft: "20px" }}>
            <div >{value?.id}</div>
            <div >{value?.content}</div>
            <button onClick={() => {
                const data = {
                    id: `${value.id}`,
                    replyTo: parentId || value.id,
                    content: "đây là sub comment"
                }
                saveComment(data)
            }}>add</button>
            {
                isActive && dataChild.map((val) => (<Comment parentId={value.id} value={val} data={data} saveComment={saveComment} />))
            }
            {
                dataChild.length > 0 && (<div onClick={() => { setActive(x => !x) }}>Có {dataChild.length} "bình luận"</div>)
            }
        </div>
    )
}
