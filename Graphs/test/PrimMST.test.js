import { GraphWeightedUndirectedAdjacencyList, PriorityQueue} from '../PrimMST.js'

test('Test Case PrimMST 1', () => {
    //create graph to compute MST on
    const graph = new GraphWeightedUndirectedAdjacencyList()
    graph.addEdge(1, 2, 1)
    graph.addEdge(2, 3, 2)
    graph.addEdge(3, 4, 1)
    graph.addEdge(3, 5, 100) // Removed in MST
    graph.addEdge(4, 5, 5)
    //create expected graph
    const expectedGraph = new GraphWeightedUndirectedAdjacencyList()
    expectedGraph.addEdge(1, 2, 1)
    expectedGraph.addEdge(2, 3, 2)
    expectedGraph.addEdge(3, 4, 1)
    expectedGraph.addEdge(4, 5, 5)
    //result from MST
    const res = graph.PrimMST(1)
    expect(res).toEqual(expectedGraph)
})

test('Test Case _shiftDown 1', () => {
    //create queue
    const queue = new PriorityQueue()
    queue.push(0, 3)
    queue.push(1, 7)
    queue.push(2, 9)
    queue.push(3, 13)
    //create expected queue
    const expectedQueue = new PriorityQueue()
    expectedQueue.push(1, 7)
    expectedQueue.push(3, 13)
    expectedQueue.push(2, 9)
    //result from poping element from the queue
    queue.pop()
    expect(queue).toEqual(expectedQueue)
})

