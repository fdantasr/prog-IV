const dadosClient: readonly [number, string] = [1, 'Luiz'];
const dadosClient1: [number, string, ...string[]] = [1, 'Luiz'];
const dadosClient2: [number, string, string?] = [1, 'Luiz', 'Miranda']; 

dadosClient1[0] = 100;

