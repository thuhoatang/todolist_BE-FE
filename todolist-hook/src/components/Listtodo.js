import React from 'react'
import Item from './Item'

const Listtodo = ({listtodo, ID,delItem, editItem}) => {
    const renderListtodo = listtodo.map((item, index) => {
        return <Item key={item._id} item={item.title} ID={item._id} delItem={delItem} editItem={editItem}/>
      })
      // console.log(listtodo);
  return (
    <div className="ui middle aligned divided list">{renderListtodo}</div>
  )
}

export default Listtodo