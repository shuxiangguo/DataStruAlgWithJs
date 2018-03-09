//图和图算法

//顶点类
function Vertex(label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
}

function Graph(v) {
    this.vertices = v;
    this.edgeTo = [];
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }

    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push("");
    }

    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(i + "->");
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] !== undefined) {
                console.log(this.adj[i][j] + " ");
            }
        }
        // console.log();
    }
}

//深度优先遍历
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        console.log("Visited vertex: " + v);
    }
    for (var w in this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}

//test dfs
console.log("Test dfs");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);



function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();//从队首移除
        if (this.adj[v] !== undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

//test dfs
console.log("test bfs");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.bfs(0);
