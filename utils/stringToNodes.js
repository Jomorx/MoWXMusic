export default (keyword,value)=>{
    const nodes = []
    if (keyword.toLowerCase().startsWith(value.toLowerCase())) {
        const key1 = keyword.slice(0, value.length)
        const node1 = {
            name: "span",
            attrs: {
                style: "color: red;",
            },
            children: [{
                type: "text",
                text: key1
            }]
        }
        nodes.push(node1)
        const key2 = keyword.slice(value.length)
        const node2 = {
            name: "span",
            attrs: {
                // style: "color: black;",
            },
            children: [{
                type: "text",
                text: key2
            }]
        }
        nodes.push(node2)
    } else {
        const node = {
            name: "span",
            attrs: {
                // style: "color: white;",
            },
            children: [{
                type: "text",
                text: keyword
            }]
        }
        nodes.push(node);
    }
    return nodes;
}