export class Message
{
    _id:String="";
    from:String=new String();
    to:String=new String();
    date:String="";
    title:String="";
    content:String="";
    read:number=0;

    toString():any
    {
        return {
            _id:this._id,
            from:this.from,
            to:this.to,
            date:this.date,
            title:this.title,
            content:this.content,
            read:this.read
        };
    }

    hydrate(entity: any): void
    {
        // super.hydrate(entity);
        // this.from.setId(this.purgeAttribute(entity,"from"));
        // this.to.setId(this.purgeAttribute(entity,"to"));
        // this.date=this.purgeAttribute(entity,"date");
        // this.title=this.purgeAttribute(entity,"title");
        // this.content=this.purgeAttribute(entity,"content");
        // this.read=this.purgeAttribute(entity,"read");
    }


}