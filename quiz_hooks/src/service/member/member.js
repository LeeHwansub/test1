let data_set = [
    {id:"aaa",pwd :"aaa", name : "홍길동", addr : '산골짜기'},
    {id:"bbb",pwd :"bbb", name:'김개똥', addr:'개똥별'},
    {id:"ccc",pwd :"ccc", name:'고길똥', addr:'마포구'},
]
const getList = () => data_set

const deleteOne = (id) => {
    data_set = data_set.filter( data => data.id !== id );
    return 1;
}

const getOne = ( id ) => //결과가 배열로 나오기때문에 0번째 전달
    data_set.filter( data => data.id === id )[0]

const insertOne =(newMember) =>{
    data_set.push(newMember);
    return 1;
}

const updateOne=(id, newData) =>{
    const index = data_set.findIndex(data=>data.id === id);
    if (index !== -1){
        data_set[index] = {...data_set[index], ...newData};
        return 1;
    }
    return 0;
}

    export {getList , deleteOne , getOne, insertOne, updateOne }

