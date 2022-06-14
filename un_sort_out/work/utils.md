# 实用代码工具

## list2tree

```js
/**
 * 将list装换成tree
 * @param {Object} myId  数据主键id
 * @param {Object} pId     数据关联的父级id
 * @param {Object} list list集合
 */
function listToTree(myId, pId, list) {
    function exists(list, parentId) {
        for (var i = 0; i < list.length; i++) {
            if (list[i][myId] == parentId) return true;
        }
        return false;
    }

    var nodes = [];
    // get the top level nodes
    for (var i = 0; i < list.length; i++) {
        var row = list[i];
        if (!exists(list, row[pId])) {
            nodes.push(row);
        }
    }

    var toDo = [];
    for (var i = 0; i < nodes.length; i++) {
        toDo.push(nodes[i]);
    }
    while (toDo.length) {
        var node = toDo.shift(); // the parent node
        // get the children nodes
        for (var i = 0; i < list.length; i++) {
            var row = list[i];
            if (row[pId] == node[myId]) {
                //var child = {id:row.id,text:row.name};
                if (node.children) {
                    node.children.push(row);
                } else {
                    node.children = [row];
                }
                toDo.push(row);
            }
        }
    }
    return nodes;
}

var list = [{
        "ids": 1,
        "parendId": 0,
        "name": "Foods",
        url: "wwww"
    },
    {
        "ids": 2,
        "parentId": 1,
        "name": "Fruits"
    },
    {
        "ids": 3,
        "parentId": 1,
        "name": "Vegetables"
    },
    {
        "ids": 4,
        "parentId": 2,
        "name": "apple"
    },
    {
        "ids": 5,
        "parentId": 2,
        "name": "orange"
    },
    {
        "ids": 6,
        "parentId": 3,
        "name": "tomato"
    },
    {
        "ids": 7,
        "parentId": 3,
        "name": "carrot"
    },
    {
        "ids": 8,
        "parentId": 3,
        "name": "cabbage"
    },
    {
        "ids": 9,
        "parentId": 3,
        "name": "potato"
    },
    {
        "ids": 10,
        "parentId": 3,
        "name": "lettuce"
    },

    {
        "ids": 11,
        "parendId": 0,
        "name": "Foods"
    },
    {
        "ids": 12,
        "parentId": 11,
        "name": "Fruits"
    },
    {
        "ids": 13,
        "parentId": 11,
        "name": "Vegetables"
    },
    {
        "ids": 14,
        "parentId": 12,
        "name": "apple"
    },
    {
        "ids": 15,
        "parentId": 12,
        "name": "orange"
    },
    {
        "ids": 16,
        "parentId": 13,
        "name": "tomato"
    },
    {
        "ids": 17,
        "parentId": 13,
        "name": "carrot"
    },
    {
        "ids": 18,
        "parentId": 13,
        "name": "cabbage"
    },
    {
        "ids": 19,
        "parentId": 13,
        "name": "potato"
    },
    {
        "ids": 20,
        "parentId": 13,
        "name": "lettuce"
    }
];

console.log(JSON.stringify(listToTree("ids", "parentId", list)));
console.log(listToTree("ids", "parentId", list));
```

