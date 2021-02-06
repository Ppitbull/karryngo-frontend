export function purgeAttribute(ref,object:Record<string|number,any>,attr:String):any
{        
    if(object==null || object==undefined) return null;
    if(object.hasOwnProperty(attr.toString())) return object[attr.toString()]
    if(ref.hasOwnProperty(attr.toString()))  return Reflect.get(this,attr.toString());
    return null;
}