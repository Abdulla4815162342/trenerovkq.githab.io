import React from 'react'
import MyInput from './UL/input/MyInput';
import MySelect from './UL/select/MySelect';

 const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
       <MyInput 
       value={filter.qvery}
       onChange={e => setFilter({...filter, qvery: e.target.value})}
       placeholder="поиск..."
       />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue= "Сортировка "
        options={[
{value: 'title', name: 'По названию'},
{value: 'body', name: 'По описанию'}
        ]}
        />
      </div>
  )
}
export default PostFilter;