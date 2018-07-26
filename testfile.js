// function getNode(node, targetNodeTitle) {
//   if (!node) {
//     return null
//   }
//
//   // console.log('node', node.title);
//   // console.log('targetNodeTitle', targetNodeTitle);
//   if (node.title === targetNodeTitle) {
//     // console.log('in node.title === targetNodeTitle, return node', node)
//     return node
//   }
//
//   if (!node.children || node.children.length === 0) {
//     return null
//   }
//
//   return node.children.map((childNode) => {
//     // console.log('child in for each', childNode)
//     return getNode(childNode, targetNodeTitle)
//   })
// }
let answer = null
function getNode(node, targetNodeTitle) {
  if (!node) {
    return null
  }

  // console.log('node', node.title);
  // console.log('targetNodeTitle', targetNodeTitle);
  if (node.title === targetNodeTitle) {
    // console.log('in node.title === targetNodeTitle, return node', node)
    answer = node
    return node
  }

  if (!node.children || node.children.length === 0) {
    return null
  }

  node.children.forEach((childNode) => {
    // console.log('child in for each', childNode)

    let innerCall = getNode(childNode, targetNodeTitle)
    if (innerCall) {
      return innerCall
    }
  })
}

tree = [
  {
    title: 'Parent',
    children: [
      {
        title: 'Child1',
        children: [
          {
            title: 'GrandChild1'
          }
        ]
      },
      {
        title: 'Child2'
      },
      {
        title: 'Child3',
        children: [
          {
            title: 'GrandChild2',
            children: [
              {
                title: 'GreatGrandChild1'
              }
            ]
          },
          {
            title: 'GrandChild3'
          }
        ]
      }
    ]
  }
]


getNode(tree[0], 'GrandChild3')
answer
