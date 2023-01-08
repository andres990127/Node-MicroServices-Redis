const db = {
    'user': [
        { id: 1, name: 'Andrés'},
        { id: 2, name: 'Mauricio'},  
    ]
};

async function list(table){
    return await db[table];
}

async function get(table, id){
    let col = await list(table);
    console.log(col);
    return col.filter(item => item.id == id)[0] || null;
}

async function upsert(table, data){
    await db[table].push(data);
    return data;
}

async function remove(table, id){
    const index = db[table].findIndex(item => item.id == id);
    console.log(index);
    if(index == -1){
        return 'Something happened';
    }
    db[table].splice[index,1];
    return 'Deleted successfully';
}

module.exports = {
    list,
    get,
    upsert,
    remove
}