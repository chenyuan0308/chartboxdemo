type ItemType = {
    item:{
        label:string,
        value:string
    }
}

export default function TableItem(props:ItemType) {
    const {item} = props;
    return (
      <div className="flex w-[50%] mt-2" style={{borderTop:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
        <div className="w-[50%] bg-[#ccc] p-4">{item.label}</div>
        <div className="w-[50%] p-4">{item.value}</div>
      </div>
    );
  }
  