class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw(canvas: any, x: number, y: number) {
    console.log(`Drawn on ${canvas} with ${x} , ${y} with color ${this.color}`);
  }
}

class Tree {
  constructor(
    public x: number,
    public y: number,
    public type: TreeType
  ) {}

  draw(canvas: any) {
    this.type.draw(canvas, this.x, this.y);
  }
}

class Forest {
  trees: Tree[] = [];

  plantTree(x: number, y: number, name: string, color: string, texture: string) {
    const treeType = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, treeType);
    this.trees.push(tree);
    return tree;
  }

  draw(canvas: any) {
    this.trees.forEach(t => t.draw(canvas))
  }
}

class TreeFactory {
  static treeTypes: TreeType[] = [];

  static getTreeType(name: string, color: string, texture: string) {
    let type = this.treeTypes.find(t => t.name === name && t.color === color && t.texture === texture);
    if(!type) {
      type = new TreeType(name, color, texture);
      this.treeTypes.push(type);
    }
    return type;
  }
}