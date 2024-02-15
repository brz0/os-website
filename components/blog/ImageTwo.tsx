interface Props {
  ImageOne?: any,
  srcOne: string,
  srcTwo: string,
  altOne?: string,
  altTwo?: string,
}

const ImageTwo: React.FC<Props> = (props) => {
  return <>
    <div className="grid grid-cols-2 my-4 gap-3 sm:gap-5">
      <div className="col-span-1">
        <img src={`${process.env.S3_BUCKET}/${props.srcOne}`} className="bg-gray-800 rounded-lg" alt={props.altOne} />
      </div>
      <div className="col-span-1">
        <img src={`${process.env.S3_BUCKET}/${props.srcTwo}`} className="bg-gray-800 rounded-lg" alt={props.altTwo} />
      </div>
    </div>
  </>
}

export default ImageTwo
