var maxDepth = function(root) {
    if(root === null) return 0;

    const leftRoot = maxDepth(root.left)
    const rightRoot = maxDepth(root.right)
    return leftRoot+1 > rightRoot +1 ? leftRoot+1: rightRoot+1
};