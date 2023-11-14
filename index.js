/**
 * @typedef {Object} Entity
 * @prop {number} ID
 * @prop {string} Description
 * @prop {number} ParentID
 */

import /** @type {Entity[]} */ Data from "./data.json" assert { type: "json" };

function lineGenerator(length){

  let out = '';

  for (let i = 0; i < length; i++){
    out += '-';
  }

  return out;
}

/**
 *
 * @param {Entity} Value
 * @param {Entity[]} List
 * @param {number} depth
 */
function recPrint(Value, List, depth = 1){

  console.log(`${lineGenerator(depth)}${Value.Description}`)

  let children = List.filter((e)=>{

    return e.ParentID == Value.ID
  });

  children.forEach((child)=>{
    recPrint(child,List, depth + 1)
  })
}

recPrint(Data[0],Data);
